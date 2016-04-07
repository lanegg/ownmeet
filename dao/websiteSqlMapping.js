var website = {
    insert:'insert into website(id, url, creator, status, isDelete, createTime, updateTime) VALUES(null, ?, ?, ?, ?, ?, ?)',
    delete: 'update website set isDelete = 1 where id = ?',
    queryById: 'select * from website where id = ?',
    queryAll: 'select * from website where isDelete = 0'
};

module.exports = website;