(function(e){function t(t){for(var o,r,i=t[0],c=t[1],u=t[2],d=0,h=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/MEWconnect-web-client/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},3:function(e,t){},"30eb":function(e,t,n){"use strict";var o=n("d62e"),a=n.n(o);a.a},"3be08":function(e,t,n){"use strict";var o=n("a9e3"),a=n.n(o);a.a},4:function(e,t){},"40ba":function(e,t,n){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h2",[e._v("MEWconnect client library examples")]),n("router-view")],1)},s=[],r={name:"app",data:function(){return{}},mounted:function(){this.$router.push("home")}},i=r,c=(n("5c0b"),n("2877")),u=Object(c["a"])(i,a,s,!1,null,null,null),l=u.exports,d=n("8c4f");function h(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var f={created:function(){var e=h(this);e&&(document.title=e)}},m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("router-link",{attrs:{to:"/home"}},[e._v("Go to Home")])],1),n("button",{on:{click:e.onClick}},[e._v("CONNECT")]),n("h3",[e._v(e._s(e.userAddress))]),n("ul",{directives:[{name:"show",rawName:"v-show",value:""!==e.userAddress,expression:"userAddress !== ''"}]},[n("li",[n("button",{on:{click:e.disconnect}},[e._v("Disconnect")])]),n("li",[n("hr"),n("h2",[e._v("Send")]),n("label",{attrs:{for:"toAmount"}},[e._v(" to amount "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.toAmount,expression:"toAmount"}],attrs:{id:"toAmount",placeholder:"amount"},domProps:{value:e.toAmount},on:{input:function(t){t.target.composing||(e.toAmount=t.target.value)}}})]),n("br"),n("button",{directives:[{name:"show",rawName:"v-show",value:""!==e.userAddress,expression:"userAddress !== ''"}],on:{click:e.sendTx}},[e._v("send")]),n("h6",[e._v("Sends to the connected wallet address")]),n("h3",[e._v("Tx Hash:")]),e._v(" "+e._s(e.txHash)+" ")]),n("li",[n("hr"),n("h2",[e._v("Send With Data")]),n("label",{attrs:{for:"toAmountData"}},[e._v(" to amount "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.toAmount,expression:"toAmount"}],attrs:{id:"toAmountData",placeholder:"amount"},domProps:{value:e.toAmount},on:{input:function(t){t.target.composing||(e.toAmount=t.target.value)}}})]),n("br"),n("label",{attrs:{for:"toData"}},[e._v(" to data "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.toData,expression:"toData"}],attrs:{id:"toData",placeholder:"0x"},domProps:{value:e.toData},on:{input:function(t){t.target.composing||(e.toData=t.target.value)}}})]),n("br"),n("label",{attrs:{for:"toAddressData"}},[e._v(" to data "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.toAddressData,expression:"toAddressData"}],attrs:{id:"toAddressData",placeholder:"0x"},domProps:{value:e.toAddressData},on:{input:function(t){t.target.composing||(e.toAddressData=t.target.value)}}})]),n("br"),n("button",{directives:[{name:"show",rawName:"v-show",value:""!==e.userAddress,expression:"userAddress !== ''"}],on:{click:e.sendTxData}},[e._v("send")]),n("h6",[e._v("Sends to the connected wallet address")]),n("h3",[e._v("Tx Hash:")]),e._v(" "+e._s(e.txHash)+" ")]),n("li",[n("hr"),n("h2",[e._v("Send Token")]),n("label",{attrs:{for:"tokenAddress"}},[e._v(" token address "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.tokenAddress,expression:"tokenAddress"}],attrs:{id:"tokenAddress",placeholder:"token address"},domProps:{value:e.tokenAddress},on:{input:function(t){t.target.composing||(e.tokenAddress=t.target.value)}}})]),n("br"),n("label",{attrs:{for:"tokenDecimals"}},[e._v(" token decimals "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.tokenDecimals,expression:"tokenDecimals"}],attrs:{id:"tokenDecimals",placeholder:"token decimals"},domProps:{value:e.tokenDecimals},on:{input:function(t){t.target.composing||(e.tokenDecimals=t.target.value)}}})]),n("br"),n("label",{attrs:{for:"tokenAmount"}},[e._v(" token amount "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.tokenAmount,expression:"tokenAmount"}],attrs:{id:"tokenAmount",placeholder:"amount"},domProps:{value:e.tokenAmount},on:{input:function(t){t.target.composing||(e.tokenAmount=t.target.value)}}})]),n("br"),n("button",{directives:[{name:"show",rawName:"v-show",value:""!==e.tokenAddress,expression:"tokenAddress !== ''"}],on:{click:function(t){return e.approveToken(e.tokenAmount)}}},[e._v(" approve ")]),n("br"),n("button",{directives:[{name:"show",rawName:"v-show",value:""!==e.tokenAddress,expression:"tokenAddress !== ''"}],on:{click:function(t){return e.sendToken(e.tokenAmount)}}},[e._v(" send ")]),n("h3",[e._v("Tx Hash:")]),e._v(" "+e._s(e.tokenTxHash)+" ")]),n("li",[n("hr"),n("h2",[e._v("Other Actions")]),n("button",{on:{click:e.getAccount}},[e._v("get account")]),n("h3",[e._v(e._s(e.account))])]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.messageToSign,expression:"messageToSign"}],domProps:{value:e.messageToSign},on:{input:function(t){t.target.composing||(e.messageToSign=t.target.value)}}}),n("button",{on:{click:e.signMessage}},[e._v("sign message")]),n("br"),""!==e.signature?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.signature,expression:"signature"}],staticStyle:{margin:"0px",height:"169px",width:"454px"},attrs:{disabled:""},domProps:{value:e.signature},on:{input:function(t){t.target.composing||(e.signature=t.target.value)}}}):e._e(),n("br")]),n("li",[n("button",{on:{click:e.getBalance}},[e._v("balance")]),n("h3",[e._v(e._s(e.balance))])]),n("li",[n("button",{on:{click:e.getCoinBase}},[e._v("getCoinBase")]),n("h3",[e._v(e._s(e.coinBase))])]),n("li",[n("button",{on:{click:e.makeCall}},[e._v("makeCall")]),n("h3",[e._v(e._s(e.callRes))])]),n("li",[n("button",{on:{click:e.getChainId}},[e._v("getChainId")]),n("h3",[e._v(e._s(e.chainId))])]),n("li",[n("button",{on:{click:e.createSubscription}},[e._v("createSubscription")])])]),n("br"),n("hr",{staticStyle:{width:"50%"}}),n("h6",[e._v(" The buttons below show the various windows and notification types that occur. They are for display only and use dummy data. ")]),n("p",[n("button",{on:{click:e.animateDirect}},[e._v("Display popup window")])]),n("p",[n("button",{on:{click:e.animateConnectedNotifier}},[e._v(" Display connected notifier ")])]),n("p",[n("button",{on:{click:e.animateNotifier}},[e._v("Display action notifier")]),n("button",{on:{click:function(t){return e.animateNotifier(1)}}},[e._v("Approve Transaction")]),n("button",{on:{click:function(t){return e.animateNotifier(2)}}},[e._v("Transaction Sent")]),n("button",{on:{click:function(t){return e.animateNotifier(3)}}},[e._v("Transaction Complete")]),n("button",{on:{click:function(t){return e.animateNotifier(4)}}},[e._v("User Decline")]),n("button",{on:{click:function(t){return e.animateNotifier(5)}}},[e._v("Transaction Failed")]),n("button",{on:{click:function(t){return e.animateNotifier(6)}}},[e._v("Transaction Error")]),n("button",{on:{click:function(t){return e.animateNotifier(7)}}},[e._v("Sign Message")])])])},p=[],v=(n("b680"),n("fa72")),b=n("de40"),g=n("6314"),w=n.n(g),_=n("901e"),k=n.n(_),A={decline:"decline",approveTx:"approveTx",disconnect:"disconnect",complete:"complete",sent:"sent",failed:"failed",signMessage:"signMessage",error:"error",notConnected:"notConnected"},x={name:"app",title:"Interactive Demo",data:function(){return{connect:{},altPopup:{},userAddress:"",ethereum:{},balance:0,web3:{},coinBase:0,txHash:"",callRes:"",chainId:0,account:"",tokenAddress:"",tokenDecimals:18,tokenTxHash:"",tokenAmount:0,toAmount:0,signature:"",toData:"0x",toAddressData:"",messageToSign:"sign this"}},mounted:function(){this.connect=new v["a"].Provider({infuraId:"859569f6decc4446a5da1bb680e7e9cf"}),this.ethereum=this.connect.makeWeb3Provider(1),this.web3=new w.a(this.ethereum),this.ethereum.on("accountsChanged",(function(e){console.log("accountsChanged User's address is ".concat(e[0]))})),this.altPopup=new b["a"]},methods:{animate:function(){this.connect.showNotice()},animateDirect:function(){this.altPopup.showPopupWindow("sdfsdfsdf")},animateNotifier:function(e){switch(e){case 1:this.connect.showNotifierDemo(A.approveTx);break;case 2:this.connect.showNotifierDemo(A.sent);break;case 3:this.connect.showNotifierDemo(A.complete);break;case 4:this.connect.showNotifierDemo(A.decline);break;case 5:this.connect.showNotifierDemo(A.failed);break;case 6:this.connect.showNotifierDemo(A.error);break;case 7:this.connect.showNotifierDemo(A.signMessage);break;default:this.connect.showNotifierDemo()}},animateConnectedNotifier:function(){this.connect.showConnectedNotice()},partialReset:function(){this.toAddressData="",this.toData="0x",this.toAmount=0},onClick:function(){var e=this;this.connect.enable().then((function(t){console.log("User's address is ".concat(t[0])),e.userAddress=t[0]}))},disconnect:function(){this.connect.disconnect(),this.userAddress=""},getAccount:function(){this.ethereum.send("eth_requestAccounts").then((function(e){console.log("User's address is ".concat(e[0]))}))},getBalance:function(){var e=this;this.web3.eth.getBalance(this.userAddress).then((function(t){return e.balance=t}))},sendTx:function(){var e=this;this.web3.eth.getBalance(this.userAddress).then((function(t){return e.balance})),this.web3.eth.getGasPrice().then((function(t){e.web3.eth.getTransactionCount(e.userAddress).then((function(n){e.web3.eth.sendTransaction({from:e.userAddress,to:e.userAddress,nonce:n,value:new k.a(e.toAmount).times(new k.a(10).pow(18)).toFixed(),gasPrice:t,gas:21e3}).once("transactionHash",(function(t){console.log(["Hash",t]),e.tokenTxHash=t,e.partialReset()})).once("receipt",(function(e){console.log(["Receipt",e])})).on("error",(function(e){console.log(["Error",e])})).then((function(e){return console.log("THEN: ",e)}))}))}))},sendTxData:function(){var e=this;this.web3.eth.getBalance(this.userAddress).then((function(t){return e.balance})),this.web3.eth.getGasPrice().then((function(t){e.web3.eth.getTransactionCount(e.userAddress).then((function(n){var o={from:e.userAddress,to:""===e.toAddressData?e.userAddress:e.toAddressData,nonce:n,value:new k.a(e.toAmount).times(new k.a(10).pow(18)).toFixed(),gasPrice:t,data:e.toData};e.web3.eth.estimateGas(o).then((function(t){o.gas=t,e.web3.eth.sendTransaction(o).once("transactionHash",(function(t){console.log(["Hash",t]),e.tokenTxHash=t,e.partialReset()})).once("receipt",(function(e){console.log(["Receipt",e])})).on("error",(function(e){console.log(["Error",e])})).then((function(e){return console.log("THEN: ",e)}))}))}))}))},signMessage:function(){var e=this;this.web3.eth.sign(this.messageToSign,this.userAddress).then((function(t){e.signature=JSON.stringify({address:e.userAddress,msg:e.messageToSign,sig:t,version:"3",signer:"MEWconnect"},null,2)})).catch((function(e){console.log(e)}))},sendToken:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tokenDecimals,o=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],a=new this.web3.eth.Contract(o),s=a.methods.transfer(this.tokenAddress.toLowerCase(),new k.a(e).times(new k.a(10).pow(n)).toFixed()).encodeABI(),r=1e5;this.web3.eth.estimateGas({from:this.userAddress,to:this.tokenAddress,value:0,data:s}).then((function(e){console.log(e),r=e})).catch(console.error),this.web3.eth.getGasPrice().then((function(e){t.web3.eth.getTransactionCount(t.userAddress).then((function(n){t.web3.eth.sendTransaction({from:t.userAddress,to:t.tokenAddress,nonce:n,value:0,gasPrice:e,gas:r,data:s}).once("transactionHash",(function(e){console.log(["Hash",e]),t.txHash=e})).once("receipt",(function(e){console.log(["Receipt",e])})).on("error",(function(e){console.log(["Error",e])})).then((function(e){return console.log("THEN: ",e)}))}))}))},approveToken:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tokenDecimals,o=[{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],a=new this.web3.eth.Contract(o),s=a.methods.approve(this.tokenAddress.toLowerCase(),new k.a(e).times(new k.a(10).pow(n)).toFixed()).encodeABI(),r=1e5;this.web3.eth.estimateGas({from:this.userAddress,to:this.tokenAddress,value:0,data:s}).then((function(e){console.log(e),r=e})).catch(console.error),this.web3.eth.getGasPrice().then((function(e){t.web3.eth.getTransactionCount(t.userAddress).then((function(n){t.web3.eth.sendTransaction({from:t.userAddress,to:t.tokenAddress,nonce:n,value:0,gasPrice:e,gas:r,data:s}).once("transactionHash",(function(e){console.log(["Hash",e]),t.txHash=e})).once("receipt",(function(e){console.log(["Receipt",e])})).on("error",(function(e){console.log(["Error",e])})).then((function(e){return console.log("THEN: ",e)}))}))}))},getCoinBase:function(){var e=this;this.web3.eth.getCoinbase().then((function(t){return e.coinBase=t}))},makeCall:function(){var e=this;this.web3.eth.call({to:"0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",data:"0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"}).then((function(t){return e.callRes=t}))},getChainId:function(){var e=this;this.web3.eth.getChainId().then((function(t){return e.chainId=t}))},createSubscription:function(){this.web3.eth.subscribe("newBlockHeaders",(function(e,t){e?console.log(e):console.log(t)})).on("data",(function(e){console.log(e)})).on("error",(function(e){console.log(e)})).on("connected",(function(e){console.log(e)}))}}},D=x,T=(n("91f9"),Object(c["a"])(D,m,p,!1,null,null,null)),y=T.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("router-link",{attrs:{to:"/home"}},[e._v("Go to Home")])],1),n("button",{on:{click:e.setup}},[e._v("Show web3 modal popup")]),n("br"),n("br"),n("br"),e._m(0)])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://github.com/MyEtherWallet/MEWconnect-web-client/blob/mewconnect-demo/src/web3Modal/web3Modal.vue",target:"_blank"}},[e._v("Code for this example")])])}],C=(n("96cf"),n("1da1")),P=n("5aac"),M=n.n(P),H={name:"web3Modal",title:"web3 Modal Example",data:function(){return{web3:{}}},mounted:function(){},methods:{setup:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={mewconnect:{package:v["a"],options:{infuraId:Object({NODE_ENV:"production",BASE_URL:"/MEWconnect-web-client/"}).REACT_APP_INFURA_ID||"859569f6decc4446a5da1bb680e7e9cf"}}},o=new M.a({network:"mainnet",cacheProvider:!0,providerOptions:n}),t.next=4,o.connect();case 4:a=t.sent,e.web3=new w.a(a);case 6:case"end":return t.stop()}}),t)})))()}}},S=H,O=(n("30eb"),Object(c["a"])(S,N,E,!1,null,null,null)),B=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("router-link",{attrs:{to:"/interactive"}},[e._v("Interactive Demo")])],1),n("p",[n("router-link",{attrs:{to:"/web3Modal"}},[e._v("Web3 Modal Example")])],1),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),e._m(0),e._m(1)])},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://github.com/MyEtherWallet/MEWconnect-web-client/tree/mewconnect-demo",target:"_blank"}},[e._v("Code for this example")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://github.com/MyEtherWallet/MEWconnect-web-client"}},[e._v("Github")])])}],R={name:"home",title:"MEWconnect client demo",data:function(){return{web3:{}}},mounted:function(){}},W=R,G=(n("3be08"),Object(c["a"])(W,j,I,!1,null,null,null)),$=G.exports;o["a"].mixin(f),o["a"].use(d["a"]),o["a"].config.productionTip=!1;var F=[{path:"/home",component:$},{path:"/interactive",component:y},{path:"/web3Modal",component:B}],U=new d["a"]({routes:F});new o["a"]({router:U,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"91f9":function(e,t,n){"use strict";var o=n("40ba"),a=n.n(o);a.a},"9c0c":function(e,t,n){},a9e3:function(e,t,n){},d62e:function(e,t,n){}});
//# sourceMappingURL=app.20f0d501.js.map