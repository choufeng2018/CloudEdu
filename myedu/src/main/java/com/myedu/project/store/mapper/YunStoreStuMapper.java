package com.myedu.project.store.mapper;

import com.myedu.project.store.domain.YunStoreStu;
import com.myedu.project.store.domain.vo.YunStoreStuVo;

import java.util.List;

/**
 * 门店学生管理Mapper接口
 * 
 * @author 梁少鹏
 * @date 2020-03-03
 */
public interface YunStoreStuMapper 
{
    /**
     * 查询门店学生管理
     * 
     * @param id 门店学生管理ID
     * @return 门店学生管理
     */
    public YunStoreStuVo selectYunStoreStuById(Long id);

    /**
     * 查询门店学生管理列表
     * 
     * @param yunStoreStu 门店学生管理
     * @return 门店学生管理集合
     */
    public List<YunStoreStuVo> selectYunStoreStuList(YunStoreStuVo yunStoreStu);

    /**
     * 新增门店学生管理
     * 
     * @param yunStoreStu 门店学生管理
     * @return 结果
     */
    public int insertYunStoreStu(YunStoreStu yunStoreStu);

    /**
     * 修改门店学生管理
     * 
     * @param yunStoreStu 门店学生管理
     * @return 结果
     */
    public int updateYunStoreStu(YunStoreStu yunStoreStu);

    /**
     * 删除门店学生管理
     * 
     * @param id 门店学生管理ID
     * @return 结果
     */
    public int deleteYunStoreStuById(Long id);

    /**
     * 批量删除门店学生管理
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteYunStoreStuByIds(Long[] ids);
}
