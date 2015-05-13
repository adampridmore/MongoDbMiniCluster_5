# MongoDbMiniCluster_5
A set of windows scripts for running a mongo cluster on a single windows PC (for testing / development).

This lets you run a 5 node mongodb cluster on a window box. Each repliaset has a single data node. This is usefull for testing any cluster or shard tags.

To install, run

```
1_clearData.bat
2_createDataFolders.bat
3_runAll.bat
4_configure.bat
```

This will cretae the datafolder, and runb and configure the cluster.

To just run the cluster, you should run 
```
3_runAll.bat
```

# Component ports #
Name|port|notes
----|----|-----
mongos|27017|The default port
repliset member 1-5|3000-30004|
config server|27019|Single node
