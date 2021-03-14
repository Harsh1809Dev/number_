#!/usr/bin/env node

const fs = require("fs");

let file_name = process.argv[2];
function number_(file_name){
	if(typeof(file_name) == "undefined")
		console.log("file not entered");
	else{
		if(!fs.existsSync(file_name))
			console.log("file not found")
		else{
			let data = fs.readFileSync(file_name,"utf-8");
			data = data.split("\r\n");
			let numbering = 1;
			for(let i = 0 ; i < data.length ; i++){
				console.log(numbering + ". " + data[i]);
				numbering++;
			}
		}
	}
}

number_(file_name);
