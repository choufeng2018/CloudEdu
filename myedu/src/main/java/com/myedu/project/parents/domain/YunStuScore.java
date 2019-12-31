package com.myedu.project.parents.domain;
import com.myedu.framework.aspectj.lang.annotation.Excel;
import java.util.Date;
import com.myedu.framework.web.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;


import java.util.Date;

/**
 * 学生成绩对象 yun_stu_score
 * 
 * @author 梁龙飞
 * @date 2019-12-30
 */
public class YunStuScore extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 成绩id */
    private Long scoreId;

    /** 考试分数 */
    @Excel(name = "考试分数")
    private Double mark;

    /**学生id */
    @Excel(name = "学生id")
    private Long studentId;

    /**课程id */
    @Excel(name = "课程id")
    private Long courseId;

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }
    public Long getStudentId() {
        return studentId;
    }

    public Long getCourseId() {
        return courseId;
    }

    /** 考试科目 */
    @Excel(name = "考试科目")
    private String examtname;

    /** 照片地址 */
    @Excel(name = "照片地址")
    private String examimage;

    /**  创建id */
    @Excel(name = " 创建id")
    private Long createById;

    /** 更新标志 */
    private String delFlag;

    /** 考试时间 */
    @Excel(name = "考试时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date examtime;

    public void setScoreId(Long scoreId) 
    {
        this.scoreId = scoreId;
    }

    public Long getScoreId() 
    {
        return scoreId;
    }
    public void setMark(Double mark) 
    {
        this.mark = mark;
    }

    public Double getMark() 
    {
        return mark;
    }
    public void setExamtname(String examtname) 
    {
        this.examtname = examtname;
    }

    public String getExamtname() 
    {
        return examtname;
    }
    public void setExamimage(String examimage) 
    {
        this.examimage = examimage;
    }

    public String getExamimage() 
    {
        return examimage;
    }
    public void setCreateById(Long createById) 
    {
        this.createById = createById;
    }

    public Long getCreateById() 
    {
        return createById;
    }
    public void setDelFlag(String delFlag) 
    {
        this.delFlag = delFlag;
    }

    public String getDelFlag() 
    {
        return delFlag;
    }

    @Override
    public String toString() {
        return "YunStuScore{" +
                "scoreId=" + scoreId +
                ", mark=" + mark +
                ", studentId=" + studentId +
                ", courseId=" + courseId +
                ", examtname='" + examtname + '\'' +
                ", examimage='" + examimage + '\'' +
                ", createById=" + createById +
                ", delFlag='" + delFlag + '\'' +
                ", examtime=" + examtime +
                '}';
    }

    public void setExamtime(Date examtime)
    {
        this.examtime = examtime;
    }

    public Date getExamtime() 
    {
        return examtime;
    }

}
