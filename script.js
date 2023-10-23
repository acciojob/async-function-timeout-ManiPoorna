async function  checkUser(e) {
	const text = document.getElementById("text").value.trim();
	const delay = document.getElementById("delay").value;
	const response = await new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(text)
		},delay)
	})
	const result = response;
	const output = document.getElementById("output");
	output.innerText = result;
}