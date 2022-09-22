        async function start(){
            var web3 = new Web3(window.ethereum);
            if(window.ethereum){
                   
                   try{
                   const accounts = await ethereum.request({method:'eth_requestAccounts'});
                   account = accounts[0];
					window.localStorage.setItem('logado',true);
				   let account1 = account.substring(0,5);
                    let account2 = account.slice(-5);
                        //$('.wallet-info').show();
                    $('#connect-wallet').html('Wallet: '+account1+'...'+account2);
				  
                  // console.log(account);        
                }catch(e){

                }
                let howMuch = "0.03";
                let amount = ethers.utils.parseUnits((howMuch).toString(), 18);

                let amount2 = ethers.utils.parseUnits(howMuch, 18);

                
             //   console.log(amount);
                 let abi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
                 var pancake = new web3.eth.Contract(abi,"0x10ED43C718714eb63d5aA57B78B54704E256024E");
                 let finalReturn = await pancake.methods.getAmountsOut(amount,["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                 "0x8257284054eD43bBa8606526c3dce2B1ef918C97"]).call();
               // let outputAmount = finalReturn[1]*0.9;
				//console.log(outputAmount);
               // console.log(finalReturn);
                //console.log(Number(outputAmount));
               // console.log(Date.now()/1000);
               // console.log(pancake.methods.swapExactETHForTokens(outputAmount,
               // ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
               //  "0x8257284054eD43bBa8606526c3dce2B1ef918C97"],account,Date.now() + 120).call({from:account,value:amount}));



                // 
            const TOKEN_ADDR = "0x8257284054eD43bBa8606526c3dce2B1ef918C97";
			const TOKEN_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var token = new web3.eth.Contract(TOKEN_ABI,TOKEN_ADDR);


                // pair.methods.approve("0x10ED43C718714eb63d5aA57B78B54704E256024E",ethers.utils.parseUnits((10).toString(), 18)).send({from:account});
              // console.log( pancake.methods.removeLiquidityETH("0x8257284054ed43bba8606526c3dce2b1ef918c97",ethers.utils.parseUnits((0.9).toString(), 18)
              //  ,0,0,account,parseInt((Date.now()/1000)) +120).call({from:account}));
               // pancake.methods.removeLiquidityETH("0x8257284054ed43bba8606526c3dce2b1ef918c97",ethers.utils.parseUnits((9).toString(), 18)
             //   ,0,0,account,parseInt((Date.now()/1000)) +120).send({from:account});
                // pancake.methods.swapExactETHForTokens(outputAmount,
              // ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
              //   "0x8257284054eD43bBa8606526c3dce2B1ef918C97"],account,Date.now() + 120).send({from:account,value:amount})
            }

            document.querySelector('button#swap-eth-for-token').addEventListener('click',async ()=>{
                let getBNBIn = document.querySelector('input[name=bnb-0]').value;
                if(getBNBIn != 0){
                let amount = ethers.utils.parseUnits((getBNBIn).toString(), 18);
                let finalReturn = await pancake.methods.getAmountsOut(amount,["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                    "0x8257284054eD43bBa8606526c3dce2B1ef918C97"]).call();
					
                    let outputAmount = (finalReturn[1]-finalReturn[1]*0.004).toString();
					
					let accountAddr = $('#connect-wallet').html();
					console.log(outputAmount);
					console.log(pancake.methods.swapExactETHForTokens(outputAmount,
                ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                 "0x8257284054eD43bBa8606526c3dce2B1ef918C97"],account,parseInt(Date.now()/1000)+120).call({from:account,value:amount}))
                    pancake.methods.swapExactETHForTokens(outputAmount,
                ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                 "0x8257284054eD43bBa8606526c3dce2B1ef918C97"],account,parseInt(Date.now()/1000)+120).send({from:account,value:amount})
				 .once('transactionHash',function(hash){
					 
					alert("Aguarde o swap finalizar!");
					$('#connect-wallet').html("Processando...");
				 })
				 .once('confirmation',function(){
					 alert("Trade finalizado, confira seu saldo!");
					$('#connect-wallet').html(accountAddr);
				 })
                }
            })

			/*

			document.querySelector('button#swap-token-for-eth').addEventListener('click',async ()=>{
				
				let getToken = document.querySelector('input[name=dt-1]').value;
            if(getToken != 0){
				let amount = ethers.utils.parseUnits((getToken).toString(), 18);
            let finalReturn = await pancake.methods.getAmountsOut(amount,[
			"0x8257284054eD43bBa8606526c3dce2B1ef918C97",
			"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]).call();
                let outputAmount =  (finalReturn[1]*0.8).toString();
				try{
				let simulate = await pancake.methods.swapExactTokensForETH(amount,outputAmount,
                ["0x8257284054eD43bBa8606526c3dce2B1ef918C97","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                 ],account,Date.now() + 120).call({from:account});
				
				 let accountAddr = $('#connect-wallet').html();
				//let saldoDisponivelSwap = await token.methods.allowance(account,"0x10ED43C718714eb63d5aA57B78B54704E256024E").call();
				//console.log(saldoDisponivelSwap);
				pancake.methods.swapExactTokensForETH(amount,outputAmount,
                ["0x8257284054eD43bBa8606526c3dce2B1ef918C97","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                 ],account,parseInt(Date.now()/1000) + 120).send({from:account})
				 .once('transactionHash',function(hash){
					 
					 alert("Aguarde o swap finalizar!");
					 $('#connect-wallet').html("Processando...");
				  })
				  .once('confirmation',function(){
					  alert("Trade finalizado, confira seu saldo!");
					 $('#connect-wallet').html(accountAddr);
				  })
				
				}
				 
				catch(e){
					if(e.message.indexOf('TRANSFER') !== -1){
						
						//Call approve e depois tentar novamente.
						const decimals = 18;
						let accountAddr = $('#connect-wallet').html();
				const input = "9999999999999999999999"; // Note: this is a string, e.g. user input
				const amount = ethers.utils.parseUnits(input, decimals)
						token.methods.approve("0x10ED43C718714eb63d5aA57B78B54704E256024E",amount)
						.send({from:account})
						.once('transactionHash', function(hash){
						alert("⏰ Aguarde Aprovar o Limite de Gastos...");
					})
					.once('confirmation', async function(confNumber, receipt){
						alert("⭐ Confirme o swap!");
						
					let	 amount2 = ethers.utils.parseUnits((getToken).toString(), 18);
             finalReturn = await pancake.methods.getAmountsOut(amount2,[
			"0x8257284054eD43bBa8606526c3dce2B1ef918C97",
			"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]).call();
                 outputAmount = (finalReturn[1]*0.8).toString();
				//let saldoDisponivelSwap = await token.methods.allowance(account,"0x10ED43C718714eb63d5aA57B78B54704E256024E").call();
				//console.log(saldoDisponivelSwap);
				pancake.methods.swapExactTokensForETH(amount2,outputAmount,
                ["0x8257284054eD43bBa8606526c3dce2B1ef918C97","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                 ],account,parseInt(Date.now()/1000) + 120).send({from:account})
				 .once('transactionHash',function(hash){
					 
					 alert("Aguarde o swap finalizar!");
					 $('#connect-wallet').html("Processando...");
				  })
				  .once('confirmation',function(){
					  alert("Trade finalizado, confira seu saldo!");
					 $('#connect-wallet').html(accountAddr);
				  })
					});
					}
				}
            }
            })
			*/


			document.querySelector('button#swap-token-for-token').addEventListener('click',async ()=>{
				
				let getToken = document.querySelector('input[name=busd-0]').value;
            if(getToken != 0){
				let amount = ethers.utils.parseUnits((getToken).toString(), 18);
            let finalReturn = await pancake.methods.getAmountsOut(amount,[
			"0xe9e7cea3dedca5984780bafc599bd69add087d56",
			"0xcbccaea3f71060fe480eac0eecdb37a34d9bd318"]).call();
                let outputAmount = (finalReturn[1]-finalReturn[1]*0.004).toString();
				try{
				let simulate = await pancake.methods.swapExactTokensForTokens(amount,outputAmount,
                ["0xe9e7cea3dedca5984780bafc599bd69add087d56",
			"0xcbccaea3f71060fe480eac0eecdb37a34d9bd318"
                 ],account,Date.now() + 120).call({from:account});
				
				 let accountAddr = $('#connect-wallet').html();
				//let saldoDisponivelSwap = await token.methods.allowance(account,"0x10ED43C718714eb63d5aA57B78B54704E256024E").call();
				//console.log(saldoDisponivelSwap);
				pancake.methods.swapExactTokensForTokens(amount,outputAmount,
                ["0xe9e7cea3dedca5984780bafc599bd69add087d56",
			"0xcbccaea3f71060fe480eac0eecdb37a34d9bd318",
                 ],account,parseInt(Date.now()/1000) + 120).send({from:account})
				 .once('transactionHash',function(hash){
					 
					 alert("Aguarde o swap finalizar!");
					 $('#connect-wallet').html("Processando...");
				  })
				  .once('confirmation',function(){
					  alert("Trade finalizado, confira seu saldo!");
					 $('#connect-wallet').html(accountAddr);
				  })
				
				}
				 
				catch(e){
					if(e.message.indexOf('TRANSFER') !== -1){
						
						//Call approve e depois tentar novamente.
						const decimals = 18;
						let accountAddr = $('#connect-wallet').html();
				const input = "9999999999999999999999"; // Note: this is a string, e.g. user input
				const amount = ethers.utils.parseUnits(input, decimals)
						token = new web3.eth.Contract([
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
],"0xe9e7cea3dedca5984780bafc599bd69add087d56");
						token.methods.approve("0x10ED43C718714eb63d5aA57B78B54704E256024E",amount)
						.send({from:account})
						.once('transactionHash', function(hash){
						alert("⏰ Aguarde Aprovar o Limite de Gastos...");
					})
					.once('confirmation', async function(confNumber, receipt){
						alert("⭐ Confirme o swap!");
						
					let	 amount2 = ethers.utils.parseUnits((getToken).toString(), 18);
             finalReturn = await pancake.methods.getAmountsOut(amount2,[
			 "0xe9e7cea3dedca5984780bafc599bd69add087d56",
			"0xcbccaea3f71060fe480eac0eecdb37a34d9bd318"]).call();
			let outputAmount = (finalReturn[1]-finalReturn[1]*0.004).toString();
				//let saldoDisponivelSwap = await token.methods.allowance(account,"0x10ED43C718714eb63d5aA57B78B54704E256024E").call();
				//console.log(saldoDisponivelSwap);
				pancake.methods.swapExactTokensForTokens(amount2,outputAmount,
                ["0xe9e7cea3dedca5984780bafc599bd69add087d56",
			"0xcbccaea3f71060fe480eac0eecdb37a34d9bd318"
                 ],account,parseInt(Date.now()/1000) + 120).send({from:account})
				 .once('transactionHash',function(hash){
					 
					 alert("Aguarde o swap finalizar!");
					 $('#connect-wallet').html("Processando...");
				  })
				  .once('confirmation',function(){
					  alert("Trade finalizado, confira seu saldo!");
					 $('#connect-wallet').html(accountAddr);
				  })
					});
					}
				}
            }
            })

		
			
            setInterval(async function(){
            let getBNBIn = document.querySelector('input[name=bnb-0]').value;
            if(getBNBIn != 0){
            let amount = ethers.utils.parseUnits((getBNBIn).toString(), 18);
            let finalReturn = await pancake.methods.getAmountsOut(amount,[
			"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
			,"0x8257284054eD43bBa8606526c3dce2B1ef918C97"]).call();
                let outputAmount = finalReturn[1];
            document.querySelector('input[name=dt-0]').value = ((outputAmount/10**18)).toPrecision(6);
            }
        },1000)

		setInterval(async function(){
            let getToken = document.querySelector('input[name=dt-1]').value;
            if(getToken != 0){
            let amount = ethers.utils.parseUnits((getToken).toString(), 18);
            let finalReturn = await pancake.methods.getAmountsOut(amount,[
			"0x8257284054eD43bBa8606526c3dce2B1ef918C97",
			"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]).call();
                let outputAmount = finalReturn[1];
            document.querySelector('input[name=bnb-1]').value = ((outputAmount/10**18).toPrecision(6));
            }
        },1000)

		setInterval(async function(){
            let getToken = document.querySelector('input[name=busd-0]').value;
            if(getToken != 0){
            let amount = ethers.utils.parseUnits((getToken).toString(), 18);
            let finalReturn = await pancake.methods.getAmountsOut(amount,[
			"0xe9e7cea3dedca5984780bafc599bd69add087d56",
			"0xcbccaea3f71060fe480eac0eecdb37a34d9bd318",
			]).call();
                let outputAmount = finalReturn[1];
            document.querySelector('input[name=dft-0]').value = ((outputAmount/10**18).toPrecision(6));
            }
        },1000)


			$('.switch').click(function(){
				let el = document.querySelector('.container-main');
				//console.log(el.style.display);
				if(el.style.display =="block"){
					el.style.display = "none";
					let el2 = document.querySelector('.container-reverse');
					el2.style.display = "block";
					document.querySelector('input[name=dt-1]').value = document.querySelector('input[name=bnb-0]').value;
				}else{
					el.style.display = "block";
					let el2 = document.querySelector('.container-reverse');
					el2.style.display = "none";
					document.querySelector('input[name=bnb-0]').value = document.querySelector('input[name=dt-1]').value;
				}
			})

        }
		if(window.localStorage.getItem('logado') != null){
			start();
		}else{
		document.getElementById("connect-wallet").addEventListener('click',async ()=>{
			start();
		})
	}
