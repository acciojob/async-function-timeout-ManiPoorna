const form = document.querySelector("form");
form.addEventListener("submit",checkUser)
async function  checkUser(e) {
	e.preventDefault();
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