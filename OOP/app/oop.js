//'use strict'

//module.exports = {

function phone(name){

	//Properties
	phone.name = "Samsung"; 
	phone.os = "Andriod";
	
	var romSize = 0;
	var touchScreen = true;	
	var isSingleSIM = true;
	var simType = "Nano";



	//functions
	phone.getProperty = function(os){
		if (this.os === "Android"){
			this.romSize = 64;
			this.touchScreen = true;
			this.isSingleSIM = false;
			this.simType = "Mini";
		}
		else if (this.os === "iOS"){
			this.romSize = 128;
			this.touchScreen = true;
			this.isSingleSIM = true;
			this.simType = "Nano";
		}
		else this.romSize = 32;
			this.touchScreen = false;
			this.isSingleSIM = true;
			this.simType = "micro";
			
	return  "The " + this.name + " phone is an " + this.os+ " phone that uses a " + this.simType +" sim card";
	}
}
//}
