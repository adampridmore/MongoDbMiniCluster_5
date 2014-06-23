var hostnames = [
	hostname() + ":30000/admin",
	hostname() + ":30001/admin",
	hostname() + ":30002/admin",
];

hostnames.forEach(function(hostname){
	var rsDb = connect(hostname);
	rsDb.runCommand({replSetInitiate: null});
});

// Wait for all replica-set's to instantiate and become primary.
// Would be nice to check instead of sleeping...
sleep(5000);

var mongosDb = connect(hostname() + ":27017/admin");

mongosDb.runCommand({addShard: "rs1/" + hostname() + ":30000"});
mongosDb.runCommand({addShard: "rs2/" + hostname() + ":30001"});
mongosDb.runCommand({addShard: "rs3/" + hostname() + ":30002"});
