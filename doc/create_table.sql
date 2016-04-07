/*
创建website表
*/
create table website(
    id int auto_increment primary key,
    url varchar(2000) not null,
    creator varchar(50) not null,
    status varchar(50),
    isDelete int not null default 0,
    createTime varchar(50),
    updateTime varchar(50)
) comment 'website info table';

/*
创建 访问记录表
*/
create table visitLog(
    id int auto_increment primary key,
    sessionId varchar(500),
    targetWebId int,
    targetWebUrl varchar(2000),
    created int
) comment 'visit website log';
