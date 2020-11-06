//immediate function expersion
(function(){

document.getElementById('massage-form').addEventListener('submit',function(e){
	//prevent default
	e.preventDefault();

	//getting a value
	const massage = document.getElementById('massage');
	const value = massage.value;
	console.log(value);


//if empty value pass
if(value === ""){
	const feedback = document.querySelector('.feedback');
	feedback.classList.add("show");
	setTimeout(function(){
		feedback.classList.remove("show");
	},2000);

}

	//change value
	document.querySelector(".massage-content ").textContent = value;

	massage.value='';
});

})();