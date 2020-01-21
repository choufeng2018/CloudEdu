package com.myedu.project.store.controller;

import java.util.List;

import com.myedu.common.utils.SecurityUtils;
import com.myedu.common.utils.StringUtils;
import com.myedu.project.dataBasic.domain.SysGrade;
import com.myedu.project.dataBasic.service.ISysGradeService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.myedu.framework.aspectj.lang.annotation.Log;
import com.myedu.framework.aspectj.lang.enums.BusinessType;
import com.myedu.project.store.domain.YunCourse;
import com.myedu.project.store.service.IYunCourseService;
import com.myedu.framework.web.controller.BaseController;
import com.myedu.framework.web.domain.AjaxResult;
import com.myedu.common.utils.poi.ExcelUtil;
import com.myedu.framework.web.page.TableDataInfo;

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

    /**
     * 查询课程列表
     */
    @PreAuthorize("@ss.hasPermi('store:course:list')")
    @GetMapping("/list")
    public TableDataInfo list(YunCourse yunCourse)
    {
        startPage();
        List<YunCourse> list = yunCourseService.selectYunCourseList(yunCourse);
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
        List<YunCourse> list = yunCourseService.selectYunCourseList(yunCourse);
        ExcelUtil<YunCourse> util = new ExcelUtil<YunCourse>(YunCourse.class);
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
}
