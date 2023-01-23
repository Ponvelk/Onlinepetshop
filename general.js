console.log("kiki");
let dog=0;
let cat=0;
let bird=0;
function backdog(){
	dog=1;
	console.log("dog");
}
function backcat(){
	cat++;
}

function backbird(){
	bird++;	
}

function backres(){
	console.log("kfghj");
	console.log(dog);
	if(dog==1){
		
		dog--;
		location.href="dog.html"
	}
	
}
