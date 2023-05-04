//your JS code here. If required.
function myFunc()
	{
		let promise =new Promise((resolve)=>{
			setTimeout(()=>{
				resolve("Hello, world!");
			},1000);
		})
		 return promise;
	}

let promise = myFunc();
promise.then((data)=>{
	document.getElementById("output").innerHTML= data;
}).catch((err)=>{
	console.log(err);
})