package com.jay.fs.dao;

import com.jay.fs.bean.FileBean;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UserFileDao {

    @Select("SELECT f.file_id, f.filename, " +
            "f.type, f.size, " +
            "u.user_id AS 'creator.user_id', u.username AS 'creator.username', " +
            "u.email AS 'creator.email', u.auth AS 'creator.auth', " +
            "f.createdate, f.url " +
            "FROM tb_file AS f, tb_user_file AS uf, tb_user AS u " +
            "WHERE f.file_id=uf.file_id AND " +
            "uf.user_id=#{user_id} AND " +
            "uf.parent=#{path} AND " +
            "u.user_id=f.creator")
    public List<FileBean> getUserFilesAtPath(@Param("user_id") int user_id, @Param("path")int path);
}
