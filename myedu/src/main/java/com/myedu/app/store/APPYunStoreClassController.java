package com.myedu.app.store;

import com.myedu.common.utils.SecurityUtils;
import com.myedu.common.utils.ServletUtils;
import com.myedu.common.utils.poi.ExcelUtil;
import com.myedu.framework.aspectj.lang.annotation.Log;
import com.myedu.framework.aspectj.lang.enums.BusinessType;
import com.myedu.framework.security.LoginUser;
import com.myedu.framework.security.service.TokenService;
import com.myedu.framework.web.controller.BaseController;
import com.myedu.framework.web.domain.AjaxResult;
import com.myedu.framework.web.page.TableDataInfo;
import com.myedu.project.store.domain.YunStoreClass;
import com.myedu.project.store.domain.vo.YunStoreClassVo;
import com.myedu.project.store.service.IYunStoreClassService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 分班管理Controller
 * 
 * @author 梁龙飞
 * @date 2020-04-18
 */
@Api("门店分班管理")
@RestController
@RequestMapping("/app/store/class")
public class APPYunStoreClassController extends BaseController
{
    @Autowired
    private IYunStoreClassService yunStoreClassService;
    @Autowired
    private TokenService tokenService;

    /**
     * 查询分班管理列表
     */
    @PreAuthorize("@ss.hasPermi('store:class:list')")
    @GetMapping("/list")
    public TableDataInfo list(YunStoreClass yunStoreClass)
    {
        LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
        if (loginUser!=null) {
            startPage();
            List<YunStoreClassVo> list = yunStoreClassService.selectYunStoreClassList(yunStoreClass);
            return getDataTable(list);
        }else{
            return getDataTableLose(null);
        }

    }

    /**
     * 导出分班管理列表
     */
    @PreAuthorize("@ss.hasPermi('store:class:export')")
    @Log(title = "分班管理", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(YunStoreClass yunStoreClass)
    {
        List<YunStoreClassVo> list = yunStoreClassService.selectYunStoreClassList(yunStoreClass);
        ExcelUtil<YunStoreClassVo> util = new ExcelUtil<YunStoreClassVo>(YunStoreClassVo.class);
        return util.exportExcel(list, "class");
    }

    /**
     * 获取分班管理详细信息
     */
    @PreAuthorize("@ss.hasPermi('store:class:query')")
    @GetMapping(value = "/{id}")
    public AjaxResult getInfo(@PathVariable("id") Long id)
    {
        LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
        if (loginUser!=null) {
            return AjaxResult.success(yunStoreClassService.selectYunStoreClassById(id));
        }else {
            return AjaxResult.error("token无效");
        }

    }

    /**
     * 新增分班管理
     */
    @PreAuthorize("@ss.hasPermi('store:class:add')")
    @Log(title = "分班管理", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody YunStoreClass yunStoreClass)
    {
        LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
        if (loginUser!=null) {
            yunStoreClass.setCreateById(SecurityUtils.getUserId());
            yunStoreClass.setCreateBy(SecurityUtils.getUsername());
            return toAjax(yunStoreClassService.insertYunStoreClass(yunStoreClass));
        }else {
            return AjaxResult.error("token无效");
        }

    }

    /**
     * 修改分班管理
     */
    @PreAuthorize("@ss.hasPermi('store:class:edit')")
    @Log(title = "分班管理", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody YunStoreClass yunStoreClass)
    {
        LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
        if (loginUser!=null) {
            yunStoreClass.setUpdateBy(SecurityUtils.getUsername());
            return toAjax(yunStoreClassService.updateYunStoreClass(yunStoreClass));
        }else {
            return AjaxResult.error("token无效");
        }


    }

    /**
     * 删除分班管理
     */
    @PreAuthorize("@ss.hasPermi('store:class:remove')")
    @Log(title = "分班管理", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
        if (loginUser!=null) {
            return toAjax(yunStoreClassService.deleteYunStoreClassByIds(ids));
        }else {
            return AjaxResult.error("token无效");
        }

    }
}
