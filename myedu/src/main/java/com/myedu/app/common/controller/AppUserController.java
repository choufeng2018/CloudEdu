package com.myedu.app.common.controller;

import com.myedu.common.constant.Constants;
import com.myedu.common.constant.UserConstants;
import com.myedu.common.utils.IdUtils;
import com.myedu.common.utils.SecurityUtils;
import com.myedu.common.utils.VerifyCodeUtils;
import com.myedu.common.utils.sign.Base64;
import com.myedu.framework.redis.RedisCache;
import com.myedu.framework.security.service.SysLoginService;
import com.myedu.framework.web.controller.BaseController;
import com.myedu.framework.web.domain.AjaxResult;
import com.myedu.project.system.domain.SysUser;
import com.myedu.project.system.service.ISysUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import io.swagger.annotations.ApiImplicitParams;
import org.springframework.web.bind.annotation.RequestParam;
/**
 * Created with IntelliJ IDEA.
 * User: 梁少鹏
 * Date: 2019/12/20
 * Time: 22:30
 * Description:
 */
@Api("APP用户信息管理")
@RestController
@RequestMapping("/app/user")
public class AppUserController extends BaseController {

    @Autowired
    private ISysUserService userService;

    @Autowired
    private SysLoginService loginService;

    @Autowired
    private RedisCache redisCache;
  /*
   * @Description :
   * @Author : 梁少鹏
   * @Date : 2019/12/21 7:48
   */
    @ApiOperation("用户注册")
    @ApiImplicitParam(name = "SysUser", value = "用户注册", dataType = "SysUser")
    @PostMapping("/userRegister")
    public AjaxResult saveUser(SysUser user)
    {
        if(UserConstants.NOT_UNIQUE.equals(userService.checkPhoneUnique(user)))
        {
            return AjaxResult.error("新增用户'" + user.getUserName() + "'失败，手机号码已存在");
        }
        user.setUserName(user.getPhonenumber());
        user.setPassword(SecurityUtils.encryptPassword(user.getPassword()));
        return toAjax(userService.insertUser(user));
    }

    /*
     * @Description :修改用户
     * @Author : 梁少鹏
     * @Date : 2019/12/21 7:48
     */
    @ApiOperation("修改用户")
    @ApiImplicitParam(name = "SysUser", value = "修改用户信息", dataType = "SysUser")
    @PostMapping("/editUser")
    public AjaxResult editUser(SysUser user)
    {
        userService.checkUserAllowed(user);
        if (UserConstants.NOT_UNIQUE.equals(userService.checkPhoneUnique(user)))
        {
            return AjaxResult.error("修改用户'" + user.getUserName() + "'失败，手机号码已存在");
        }
        user.setUserName(user.getPhonenumber());
        user.setUpdateBy(SecurityUtils.getUsername());
        return toAjax(userService.updateUser(user));
    }

   /*
    * @Description :App登录方法
    * @Author : 梁少鹏
    * @Date : 2019/12/28 18:42
    */
    @ApiOperation("APP用户登录")
    //@ApiImplicitParam(name = "SysUser", value = "APP用户登录", dataType = "String")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType="form",name="username",dataType="String",required=true,value="用户的姓名"),
            @ApiImplicitParam(paramType="form",name="password",dataType="String",required=true,value="用户的密码"),
            @ApiImplicitParam(paramType="form",name="code",dataType="String",required=true,value="验证码"),
            @ApiImplicitParam(paramType="form",name="uuid",dataType="String",required=true,value="uuid"),
    })
    @PostMapping(value = "/appLogin",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public AjaxResult appLogin(@RequestParam("username") String username,
                               @RequestParam("password") String password,
                               @RequestParam("code") String code,
                               @RequestParam("uuid") String uuid)
    {
        AjaxResult ajax = AjaxResult.success();
        // 生成令牌
        String token = loginService.login(username, password, code, uuid);
        ajax.put(Constants.TOKEN, token);
        return ajax;
    }

    /*
     * @Description 生成APP登录验证码
     * @Author : 梁少鹏
     * @Date : 2019/12/28 19:32
     */
    @ApiOperation("APP用户登录验证码生成")
    @ApiImplicitParam(name = "HttpServletResponse", value = "APP用户登录验证码生成")
    @GetMapping("/getAppCodeImage")
    public AjaxResult getAppCode(HttpServletResponse response) throws IOException
    {
        // 生成随机字串
        String verifyCode = VerifyCodeUtils.generateVerifyCode(4);
        // 唯一标识
        String uuid = IdUtils.simpleUUID();
        String verifyKey = Constants.CAPTCHA_CODE_KEY + uuid;

        redisCache.setCacheObject(verifyKey, verifyCode, Constants.CAPTCHA_EXPIRATION, TimeUnit.MINUTES);
        // 生成图片
        int w = 111, h = 36;
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        VerifyCodeUtils.outputImage(w, h, stream, verifyCode);
        try
        {
            AjaxResult ajax = AjaxResult.success();
            ajax.put("uuid", uuid);
            ajax.put("img", Base64.encode(stream.toByteArray()));
            return ajax;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return AjaxResult.error(e.getMessage());
        }
        finally
        {
            stream.close();
        }
    }

}