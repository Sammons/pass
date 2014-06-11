var fs = require('fs');
var bashfile = "/home/catalyst/.bashrc";
var bashrc = fs.readFileSync(bashfile) + '';

var delim = "#*************************\n#ben's config\n#*************************";

var begin = bashrc.indexOf(delim);

if (begin < 0) begin = bashrc.length;

bashrc = bashrc.substring(0,begin);

bashrc = bashrc + fs.readFileSync('./bashrc_extensions');

fs.appendFile(bashfile,bashrc,"utf8",function(e){
	if (!e) console.log('success');
	else console.log('fail');
});