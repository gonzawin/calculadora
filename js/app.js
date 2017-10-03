var calculadora = (function(){
	var pantalla = document.querySelector('.ver');
	var num1 = 0,num2 = 0; 
	var calculado = ""; 
	comprobar = 0; 
	operador = 0;  

	return{
		borrar : function(){ 
			num1 = 0; 
			num2 = 0; 
			calculado = ""; 
			comprobar = 0; 
			operador = 0; 
			pantalla.textContent = 0; 

		},
		operacion : function(tecla){ 
			switch (tecla){ 
				case 1: 
				operador=1 
				pantalla.textContent = ""; 
				break; 
				case 2: 
				operador=2 
				pantalla.textContent = ""; 
				break; 
				case 3: 
				operador=3 
				pantalla.textContent = ""; 
				break; 
				case 4: 
				operador=4 
				pantalla.textContent = ""; 
				break; 
				case '-' :
				operador=5
				var masmenos = pantalla.textContent;
				if(masmenos>0){
					pantalla.textContent = "-" + masmenos;
				}
				default: 
				break; 
			} 
			calculado=""; 
			comprobar=1; 

		},
		mostrar : function(tecla){ 

			calculado = calculado + tecla; 
			pantalla.textContent = calculado; 

			if(comprobar == 0){ 
				num1 = parseFloat(calculado); 
			}else if(comprobar == 1){ 
				num2 = parseFloat(calculado); 
			} 


		},
		resultado : function(){ 
			switch (operador){ 
				case 1: 
				pantalla.textContent = num1+num2; 
				break; 
				case 2: 
				pantalla.textContent = num1-num2; 
				break; 
				case 3: 
				pantalla.textContent = num1*num2; 
				break; 
				case 4: 
				pantalla.textContent = num1/num2; 
				break; 
				default: 
				break;	


			} 
			num1=parseFloat(pantalla.textContent); 
			calculado=""; 

		} 	  	
	}
})();