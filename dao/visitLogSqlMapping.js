var visitLog = {
    insert:'insert into visitLog(id, sessionId, targetWebId, targetWebUrl, created) VALUES(null, ?, ?, ?, ?)',
    queryCount:'select count(id) from visitLog'
};

module.exports = visitLog;