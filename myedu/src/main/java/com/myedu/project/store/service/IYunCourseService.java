package com.myedu.project.store.service;

import com.myedu.project.store.domain.YunCourse;
import com.myedu.project.store.domain.vo.YunCourseVo;

import java.util.List;

/**
 * 课程Service接口
 * 
 * @author 梁少鹏
 * @date 2020-01-21
 */
public interface IYunCourseService 
{
    /**
     * 查询课程
     * 
     * @param id 课程ID
     * @return 课程
     */
    public YunCourseVo selectYunCourseById(Long id);

    /**
     * 查询课程列表
     * 
     * @param yunCourse 课程
     * @return 课程集合
     */
    public List<YunCourseVo> selectYunCourseList(YunCourse yunCourse);

    /**
     * 新增课程
     * 
     * @param yunCourse 课程
     * @return 结果
     */
    public int insertYunCourse(YunCourse yunCourse);

    /**
     * 修改课程
     * 
     * @param yunCourse 课程
     * @return 结果
     */
    public int updateYunCourse(YunCourse yunCourse);

    /**
     * 批量删除课程
     * 
     * @param ids 需要删除的课程ID
     * @return 结果
     */
    public int deleteYunCourseByIds(Long[] ids);

    /**
     * 删除课程信息
     * 
     * @param id 课程ID
     * @return 结果
     */
    public int deleteYunCourseById(Long id);
}
