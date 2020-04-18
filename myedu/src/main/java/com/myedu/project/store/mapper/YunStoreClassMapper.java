package com.myedu.project.store.mapper;

import com.myedu.project.store.domain.YunStoreClass;
import com.myedu.project.store.domain.vo.YunStoreClassVo;

import java.util.List;

/**
 * 分班管理Mapper接口
 * 
 * @author 梁龙飞
 * @date 2020-04-18
 */
public interface YunStoreClassMapper 
{
    /**
     * 查询分班管理
     * 
     * @param id 分班管理ID
     * @return 分班管理
     */
    public YunStoreClassVo selectYunStoreClassById(Long id);

    /**
     * 查询分班管理列表
     * 
     * @param yunStoreClass 分班管理
     * @return 分班管理集合
     */
    public List<YunStoreClassVo> selectYunStoreClassList(YunStoreClass yunStoreClass);

    /**
     * 新增分班管理
     * 
     * @param yunStoreClass 分班管理
     * @return 结果
     */
    public int insertYunStoreClass(YunStoreClass yunStoreClass);

    /**
     * 修改分班管理
     * 
     * @param yunStoreClass 分班管理
     * @return 结果
     */
    public int updateYunStoreClass(YunStoreClass yunStoreClass);

    /**
     * 删除分班管理
     * 
     * @param id 分班管理ID
     * @return 结果
     */
    public int deleteYunStoreClassById(Long id);

    /**
     * 批量删除分班管理
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteYunStoreClassByIds(Long[] ids);
}
