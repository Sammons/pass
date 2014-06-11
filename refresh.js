var fs = require('fs');
var bashfile = "/home/catalyst/.bashrc";
var bashrc = fs.readFileSync(bashfile) + '';

var delim = "####bens config";

var begin = bashrc.indexOf(delim);

if (begin < 0) begin = bashrc.length;

bashrc = bashrc.substring(0,begin);

bashrc = bashrc +'\n'+delim+'\n'+(fs.readFileSync('./bashrc_extensions')+'').replace(/\s/gm,'').replace(/export/gm,'export ');

fs.writeFile(bashfile,bashrc,"utf8",function(e){
	if (!e) console.log('success');
	else console.log('fail');
});
