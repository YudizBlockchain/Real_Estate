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

//function for update records in smart contract




//function for add records in smart contracts
function Add(){
	var Id = document.getElementById("Pid").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var pin = document.getElementById("pcode").value;
	var country = document.getElementById("country").value;
	var ptype = document.getElementById("min_15").value;
	var pdate = document.getElementById("datepicker").value;
	var ddate = document.getElementById("datepicker1").value;
	var pprice = document.getElementById("pprice").value;
	var dprice = document.getElementById("dprice").value;
	var rcost = document.getElementById("rcost").value;
	var nprofit = document.getElementById("nprofit").value;

	web3.eth.sendTransaction({
		from:web3.eth.accounts[0],
		to:'0xdbf754b0daf86d9c64155fc99f93ce34ccae61c7',
		
		data: Contract.addProperty.getData(Id,city,state,pin,country,ptype,pdate,ddate,pprice,dprice,rcost,nprofit)
	  },(err,res) =>{
		alert("Transaction ID:"+res);
		
	  })
	  ClearFields();
}

function nextPage(){
	window.location = "update.html"
}


function ClearFields() {

	document.getElementById("Pid").value = "";
	document.getElementById("city").value = "";
	document.getElementById("state").value = "";
	document.getElementById("pcode").value = "";
	document.getElementById("country").value = "";
	document.getElementById("min_15").value = "";
	document.getElementById("datepicker").value = "";
	document.getElementById("datepicker1").value = "";
	document.getElementById("pprice").value = "";
	document.getElementById("dprice").value = "";
	document.getElementById("rcost").value = "";
	document.getElementById("nprofit").value = "";



}


//calling function on button click
