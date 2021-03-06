package com.myedu.project.store.controller;

import com.myedu.common.utils.DateUtils;
import com.myedu.common.utils.SecurityUtils;
import com.myedu.common.utils.StringUtils;
import com.myedu.common.utils.poi.ExcelUtil;
import com.myedu.framework.aspectj.lang.annotation.Log;
import com.myedu.framework.aspectj.lang.enums.BusinessType;
import com.myedu.framework.security.service.TokenService;
import com.myedu.framework.web.controller.BaseController;
import com.myedu.framework.web.domain.AjaxResult;
import com.myedu.framework.web.page.TableDataInfo;
import com.myedu.project.dataBasic.domain.SysGrade;
import com.myedu.project.dataBasic.service.ISysGradeService;
import com.myedu.project.store.domain.YunCourse;
import com.myedu.project.store.domain.YunCourseComment;
import com.myedu.project.store.domain.vo.YunCourseVo;
import com.myedu.project.store.domain.vo.YunStoreVo;
import com.myedu.project.store.enums.CourseType;
import com.myedu.project.store.service.IYunCourseCommentService;
import com.myedu.project.store.service.IYunCourseService;
import com.myedu.project.store.service.IYunStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 课程Controller
 * 
 * @author 梁少鹏
 * @date 2020-01-21
 */
@RestController
@RequestMapping("/store/course")
public class YunCourseController extends BaseController
{
    @Autowired
    private IYunCourseService yunCourseService;
    @Autowired
    private ISysGradeService sysGradeService;
    @Autowired
    private IYunStoreService yunStoreService;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private IYunCourseCommentService yunCourseCommentService;
    /**
     * 查询课程列表
     */
    @PreAuthorize("@ss.hasPermi('store:course:list')")
    @GetMapping("/list")
    public TableDataInfo list(YunCourse yunCourse)
    {
        startPage();
        List<YunCourseVo> list = yunCourseService.selectYunCourseList(yunCourse);
        return getDataTable(list);
    }

    /**
     * 导出课程列表
     */
    @PreAuthorize("@ss.hasPermi('store:course:export')")
    @Log(title = "课程", businessType = BusinessType.EXPORT)
    @GetMapping("/export")
    public AjaxResult export(YunCourse yunCourse)
    {
        List<YunCourseVo> list = yunCourseService.selectYunCourseList(yunCourse);
        ExcelUtil<YunCourseVo> util = new ExcelUtil<YunCourseVo>(YunCourseVo.class);
        return util.exportExcel(list, "course");
    }

    /**
     * 获取课程详细信息
     */
    @PreAuthorize("@ss.hasPermi('store:course:query')")
    @GetMapping(value = { "/", "/{id}" })
    public AjaxResult getInfo(@PathVariable(value = "id", required = false) Long id)
    {
        AjaxResult ajax = AjaxResult.success();
        SysGrade sysGrade=new SysGrade();
        ajax.put("sysGrades", sysGradeService.selectSysGradeList(sysGrade));
        YunStoreVo yunStore=new YunStoreVo();
        yunStore.setCreateById(SecurityUtils.getUserId());
        List<YunStoreVo> stores=yunStoreService.selectYunStoreList(yunStore);
        ajax.put("stores", stores);
        if (StringUtils.isNotNull(id))
        {
            ajax.put(AjaxResult.DATA_TAG,yunCourseService.selectYunCourseById(id));
        }
        return ajax;
    }

    /**
     * 新增课程
     */
    @PreAuthorize("@ss.hasPermi('store:course:add')")
    @Log(title = "课程", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody YunCourse yunCourse)
    {
        yunCourse.setCreateById(SecurityUtils.getUserId());
        yunCourse.setCreateBy(SecurityUtils.getUsername());
        yunCourse.setCreateTime(DateUtils.getNowDate());
        return toAjax(yunCourseService.insertYunCourse(yunCourse));
    }

    /**
     * 修改课程
     */
    @PreAuthorize("@ss.hasPermi('store:course:edit')")
    @Log(title = "课程", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody YunCourse yunCourse)
    {
        yunCourse.setUpdateTime(DateUtils.getNowDate());
        return toAjax(yunCourseService.updateYunCourse(yunCourse));
    }

    /**
     * 删除课程
     */
    @PreAuthorize("@ss.hasPermi('store:course:remove')")
    @Log(title = "课程", businessType = BusinessType.DELETE)
	@DeleteMapping("/{ids}")
    public AjaxResult remove(@PathVariable Long[] ids)
    {
        return toAjax(yunCourseService.deleteYunCourseByIds(ids));
    }
    /*
     * @Description :更改课程状态下线
     * @Author : 梁少鹏
     * @Date : 2020/1/21 16:30
     */
    @PreAuthorize("@ss.hasPermi('store:course:changeStatusOff')")
    @Log(title = "课程", businessType = BusinessType.UPDATE)
    @GetMapping("/changeStatusOff/{ids}")
    public AjaxResult changeStatusOff(@PathVariable Long[] ids)
    {
        int rows=0;
        for (Long id:ids) {
            YunCourse yunCourse= yunCourseService.selectYunCourseById(id);
            if(yunCourse!=null){
                yunCourse.setStatus(CourseType.OFFLINE.getCode());
                rows=yunCourseService.updateYunCourse(yunCourse);
            }
        }
        return toAjax(rows);
    }

    /*
     * @Description :更改课程状态在售
     * @Author : 梁少鹏
     * @Date : 2020/1/21 16:30
     */
    @PreAuthorize("@ss.hasPermi('store:course:changeStatusOn')")
    @Log(title = "课程", businessType = BusinessType.UPDATE)
    @GetMapping("/changeStatusOn/{ids}")
    public AjaxResult changeStatusOn(@PathVariable Long[] ids)
    {
        int rows=0;
        for (Long id:ids) {
            YunCourse yunCourse= yunCourseService.selectYunCourseById(id);
            if(yunCourse!=null){
                yunCourse.setStatus(CourseType.ONLINE.getCode());
                rows=yunCourseService.updateYunCourse(yunCourse);
            }
        }
        return toAjax(rows);
    }


    /**
     * 新增课程评价管理
     */
    @PreAuthorize("@ss.hasPermi('store:course:comment')")
    @Log(title = "云托管动态管理", businessType = BusinessType.INSERT)
    @PostMapping(value = "/comment")
    public AjaxResult comment(@RequestBody YunCourseComment yunCourseComment)
    {
        AjaxResult ajax = AjaxResult.success();
        yunCourseComment.setCreateById(SecurityUtils.getUserId());
        yunCourseComment.setCreateBy(SecurityUtils.getUsername());
        yunCourseCommentService.insertYunCourseComment(yunCourseComment);

        YunCourse yunCourse=yunCourseService.selectYunCourseById(yunCourseComment.getId());
       // yunCourse.setComments(yunCourse.getComments()+1);
        return toAjax(yunCourseService.updateYunCourse(yunCourse));
    }

}
