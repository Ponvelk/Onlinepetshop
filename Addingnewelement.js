let flag=0;
 	function addelement(){
 		if(flag==0){
 		 document.querySelector(".addcontent").classList.remove("hidden");
 		 flag++;
 		}
 		else{
 			document.querySelector(".addcontent").classList.add("hidden");
 	 		 flag--;
 		}
 	}
   function addsuccess(){
	   alert("Added successfully....")
 	}
 	
 	