package com.myedu.project.order.domain;

import com.myedu.framework.aspectj.lang.annotation.Excel;
import java.util.Date;
import com.myedu.framework.web.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
/**
 * 订单对象 yun_order
 * 
 * @author 梁少鹏
 * @date 2020-01-22
 */
public class YunOrder extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 订单表 */
    private Long id;

    /** 订单编号 */
    @Excel(name = "订单编号")
    private String num;

    /** 关联学生id */
    @Excel(name = "关联学生id")
    private Long studentId;

    /** 关联门店id */
    @Excel(name = "关联门店id")
    private Long storeId;

    /** 关联课程id */
    @Excel(name = "关联课程id")
    private Long courseId;

    /** 关联年级id */
    @Excel(name = "关联年级id")
    private Long greadId;

    /** 托管时间 */
    @Excel(name = "托管时长", width = 30)
    private String managTime;

    /** 是否含餐 */
    @Excel(name = "是否含餐")
    private String isMeal;

    /** 入学时间 */
    @Excel(name = "入学时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date enrolTime;

    /** 证件类型 */
    @Excel(name = "证件类型")
    private String certificateType;

    /** 学生姓名 */
    @Excel(name = "学生姓名")
    private String studentName;

    /** 证件号 */
    @Excel(name = "证件号")
    private String certificateNum;

    /** 实付总金额 */
    @Excel(name = "实付总金额")
    private Double totalMoney;

    /** 支付状态 */
    @Excel(name = "支付状态")
    private String status;

    /** 删除标志（0代表存在 1代表删除） */
    @Excel(name = "删除标志", readConverterExp = "0=代表存在,1=代表删除")
    private String delFlag;

    /** 创建人Id */
    @Excel(name = "创建人Id")
    private Long createById;

    public void setId(Long id) 
    {
        this.id = id;
    }

    public Long getId() 
    {
        return id;
    }
    public void setNum(String num) 
    {
        this.num = num;
    }

    public String getNum() 
    {
        return num;
    }
    public void setStudentId(Long studentId) 
    {
        this.studentId = studentId;
    }

    public Long getStudentId() 
    {
        return studentId;
    }
    public void setStoreId(Long storeId) 
    {
        this.storeId = storeId;
    }

    public Long getStoreId() 
    {
        return storeId;
    }
    public void setCourseId(Long courseId) 
    {
        this.courseId = courseId;
    }

    public Long getCourseId() 
    {
        return courseId;
    }
    public void setGreadId(Long greadId) 
    {
        this.greadId = greadId;
    }

    public Long getGreadId() 
    {
        return greadId;
    }
    public void setManagTime(String managTime)
    {
        this.managTime = managTime;
    }

    public String getManagTime()
    {
        return managTime;
    }
    public void setIsMeal(String isMeal) 
    {
        this.isMeal = isMeal;
    }

    public String getIsMeal() 
    {
        return isMeal;
    }
    public void setEnrolTime(Date enrolTime) 
    {
        this.enrolTime = enrolTime;
    }

    public Date getEnrolTime() 
    {
        return enrolTime;
    }
    public void setCertificateType(String certificateType) 
    {
        this.certificateType = certificateType;
    }

    public String getCertificateType() 
    {
        return certificateType;
    }
    public void setStudentName(String studentName)
    {
        this.studentName = studentName;
    }

    public String getStudentName()
    {
        return studentName;
    }
    public void setCertificateNum(String certificateNum) 
    {
        this.certificateNum = certificateNum;
    }

    public String getCertificateNum() 
    {
        return certificateNum;
    }
    public void setTotalMoney(Double totalMoney) 
    {
        this.totalMoney = totalMoney;
    }

    public Double getTotalMoney() 
    {
        return totalMoney;
    }
    public void setStatus(String status) 
    {
        this.status = status;
    }

    public String getStatus() 
    {
        return status;
    }
    public void setDelFlag(String delFlag) 
    {
        this.delFlag = delFlag;
    }

    public String getDelFlag() 
    {
        return delFlag;
    }
    public void setCreateById(Long createById) 
    {
        this.createById = createById;
    }

    public Long getCreateById() 
    {
        return createById;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("num", getNum())
            .append("studentId", getStudentId())
            .append("storeId", getStoreId())
            .append("courseId", getCourseId())
            .append("greadId", getGreadId())
            .append("managTime", getManagTime())
            .append("isMeal", getIsMeal())
            .append("enrolTime", getEnrolTime())
            .append("certificateType", getCertificateType())
            .append("studengName", getStudentName())
            .append("certificateNum", getCertificateNum())
            .append("totalMoney", getTotalMoney())
            .append("status", getStatus())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("delFlag", getDelFlag())
            .append("createById", getCreateById())
            .toString();
    }
}