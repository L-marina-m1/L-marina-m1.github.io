document.getElementById("calcular").addEventListener("click",function(){
    let num1 = parseFloat ( documentvalue.getElementById("numero1").value);//8
    let num2 = parseFloat ( documentvalue.getElementById("numero2").value);//2
        let operacion = document.getElementById("operacion").value;//SUMA
        let resultado = document.getElementById("resultado");

// VALIDACION QUE NO ESTA ENVIANDO VACIOS
        if(isNaN(num1)){
            resultado.textContent = "ingrese un numero valido";
            return;
        }
        function calcular(a,b,op){
            switch(op){
                case "suma":
                    return a+b;
                case "resta":
                    return a-b;
                case "multiplicacion":
                     return a*b;
                case "division":
                     return a/b;
                            
                    default:
                            return "operacion invalida"


            }
        }
        let resultadofinal = calcular (num1,num2,operacion);
        resultado.textContent ="El resultdo es: "+resultadofinal;
    

})