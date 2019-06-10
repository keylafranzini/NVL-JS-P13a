numPrim = new Array (1,2,3);
function primos(numero){
    
	for(i = 3; i <= numero; i +=2){
		primo = true;

		for( a = 2 ; a < numPrim.length; a++){
			if(i % numPrim[a] == 0){
				primo = false;
				break;
			}
		}
		if (primo == true){
			numPrim.push(i);
		}
	}
	return numPrim.join();
}

document.write(primos(100));

