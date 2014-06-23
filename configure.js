var hostNames = [
	"mnab-dev14l:30000/admin",
	"mnab-dev14l:30001/admin",
	"mnab-dev14l:30002/admin",
];

hostNames.forEach(function(hostName){
	var rsDb = connect(hostName);
	rsDb.runCommand({replSetInitiate: null});
});

// Wait for all replica-set's to instantiate and become primary.
// Would be nice to check instead of sleeping...
sleep(5000);

var mongosDb = connect("MNAB-DEV14L:27017/admin");

mongosDb.runCommand({addShard: "rs1/MNAB-DEV14L:30000"});
mongosDb.runCommand({addShard: "rs2/MNAB-DEV14L:30001"});
mongosDb.runCommand({addShard: "rs3/MNAB-DEV14L:30002"});