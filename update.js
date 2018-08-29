var Web3 ;
Web3 = require('web3');

//calling metamask
if (typeof web3 !== 'undefined') {
    console.log("Using web3 detected from external source like Metamask");    
    window.web3 = new Web3(web3.currentProvider);
      
} else {
	
	console.log('No web3? You should consider trying MetaMask!');
}

//abi of contract code
var Repo =   web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_city",
				"type": "string"
			},
			{
				"name": "_state",
				"type": "string"
			},
			{
				"name": "_pcode",
				"type": "uint256"
			},
			{
				"name": "_country",
				"type": "string"
			},
			{
				"name": "_ptype",
				"type": "string"
			},
			{
				"name": "_purDate",
				"type": "string"
			},
			{
				"name": "_disDate",
				"type": "string"
			},
			{
				"name": "_purPrice",
				"type": "uint256"
			},
			{
				"name": "_disPrice",
				"type": "uint256"
			},
			{
				"name": "_repCost",
				"type": "uint256"
			},
			{
				"name": "_netProf",
				"type": "uint256"
			}
		],
		"name": "addProperty",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_city",
				"type": "string"
			},
			{
				"name": "_state",
				"type": "string"
			},
			{
				"name": "_pcode",
				"type": "uint256"
			},
			{
				"name": "_country",
				"type": "string"
			},
			{
				"name": "_ptype",
				"type": "string"
			},
			{
				"name": "_purDate",
				"type": "string"
			},
			{
				"name": "_disDate",
				"type": "string"
			},
			{
				"name": "_purPrice",
				"type": "uint256"
			},
			{
				"name": "_disPrice",
				"type": "uint256"
			},
			{
				"name": "_repCost",
				"type": "uint256"
			},
			{
				"name": "_netProf",
				"type": "uint256"
			}
		],
		"name": "Update",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getProperty",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getProperty1",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

var Contract = Repo.at("0xdbf754b0daf86d9c64155fc99f93ce34ccae61c7");
console.log("abi loaded");

var uId,uCity,uState,uPin,uCountry,uPtype,uPdate,uDdate,uPprice,uDprice,uRcost,uNprofit;


function promptMe(){

	

	
    var rId = prompt("Please Enter Id of Record");
	
	if(rId != null){

	Contract.getProperty.call(rId,function(err,res){
        result = res;
        

        console.log(result);
        setTimeout(function(){
            Contract.getProperty.call(rId,function(err,res){
              //var  Pid1 = res[0]
				console.log("Pid Is:" + res[0]);
				uId = res[0];
				uCity = res[1];
				uState = res[2];
				uPin = res[3].c[0];
				uCountry = res[4]; 
				uPtype = res[5]; 
				uPdate = res[6];

            document.getElementById("Pid1").value = uId;
            document.getElementById("city1").value = uCity;
            document.getElementById("state1").value = uState;
            document.getElementById("pcode1").value = uPin;
            document.getElementById("country1").value = uCountry; 
            document.getElementById("min_151").value = uPtype; 
            document.getElementById("datepicker1").value = uPdate;
            }) 
        }, 2000);
	},	Contract.getProperty1.call(rId,function(err,res){
		

		
			//do what you need here
            result=res;
            console.log("Log value for res"+ res);
			uDdate = result[0];
			uPprice = result[1].c[0];
			uDprice = result[2].c[0];
			uRcost = result[3].c[0];
			uNprofit = result[4].c[0];
			//console.log(result);
            console.log(uPprice)
            setTimeout(function(){
                document.getElementById("datepicker11").value = uDdate;
                document.getElementById("pprice1").value = uPprice;
                document.getElementById("dprice1").value = uDprice;
                document.getElementById("rcost1").value = uRcost;
                document.getElementById("nprofit1").value = uNprofit;
               
			}, 2000);
			


	}));

    }

}






function Update(){
	var Id = document.getElementById("Pid1").value;
	var city = document.getElementById("city1").value;
	var state = document.getElementById("state1").value;
	var pin = document.getElementById("pcode1").value;
	var country = document.getElementById("country1").value;
	var ptype = document.getElementById("min_151").value;
	var pdate = document.getElementById("datepicker1").value;
	var ddate = document.getElementById("datepicker11").value;
	var pprice = document.getElementById("pprice1").value;
	var dprice = document.getElementById("dprice1").value;
	var rcost = document.getElementById("rcost1").value;
	var nprofit = document.getElementById("nprofit1").value;

	web3.eth.sendTransaction({
		from:web3.eth.accounts[0],
		to:'0xdbf754b0daf86d9c64155fc99f93ce34ccae61c7',
		
		data: Contract.Update.getData(Id,city,state,pin,country,ptype,pdate,ddate,pprice,dprice,rcost,nprofit)
	  },(err,res) =>{
		alert("Transaction ID:"+res);
	  })
	  ClearFields1();
}


function ClearFields1() {
document.getElementById("Pid1").value = "";
document.getElementById("city1").value = "";
document.getElementById("state1").value = "";
document.getElementById("pcode1").value = "";
document.getElementById("country1").value = ""; 
document.getElementById("min_151").value = ""; 
document.getElementById("datepicker1").value = "";
document.getElementById("datepicker11").value = "";
document.getElementById("pprice1").value = "";
document.getElementById("dprice1").value = "";
document.getElementById("rcost1").value = "";
document.getElementById("nprofit1").value = "";

}
console.log(uPprice);