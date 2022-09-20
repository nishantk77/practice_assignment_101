
function prime(num){
 for(i=0; i<=num**0.5; i++){
 if(num % i == 0){ return false;}
 }
 
return true;
 }

 for(j=2; j<=50; j++){
 if(prime(j) === true){
	 console.log(j, "is a prime")
	 }
	 
 else{
	 console.log(j,"is not a prime)
	 }
 
}