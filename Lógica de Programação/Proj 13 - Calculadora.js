function calculadora(entrada1, entrada2, operador){
    let resultado;
    if(operador === 1){
        resultado = entrada1 + entrada2;
    } else if(operador === 2){
        resultado = entrada1 - entrada2;
    } else if(operador === 3){
        resultado = entrada1 * entrada2;
    } else if(operador === 4){
        if(entrada2 === 0){
            resultado = 0;
        } else {
            resultado = entrada1 / entrada2;
        }
    } else{
        resultado = 0;
    }
    return resultado;
}
