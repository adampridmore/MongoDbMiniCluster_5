start mongod -f mongod_rs1.config
start mongod -f mongod_rs2.config
start mongod -f mongod_rs3.config
start mongod -f mongod_rs4.config
start mongod -f mongod_rs5.config
start mongod -f mongod_configSrv.config
start mongos -port 27017 -logpath .\log\mongos.log -logappend -configdb %computername%:27019
