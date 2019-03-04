reinas(filas, columnas): any[] {
    if (filas <= 0) {
        return this.arreglo;
    } else {
        return this.agregarReina(filas - 1, columnas);
    }
}
 
agregarReina(nuevaFila, columnas): any[] {
    var nuevaSolucion = [];
    var anterior = this.reinas(nuevaFila, columnas);
    for (var i = 0; i < anterior.length; i++) {
    	//console.log(anterior); Aqui se van generando los 8x8 posiciones del tablero
        var solucion = anterior[i];
        //console.log(solucion); //Recorre cada columna de cada fila
        for (var nuevaColumna = 0; nuevaColumna < columnas; nuevaColumna++) {
        	//Ciclo comparando cada columna hasta que sea mayor a 8 para copiar los valores validos a la variable nueva solucion
            if (!this.validar(nuevaFila, nuevaColumna, solucion))
    			//El valor de la bandera nueva columan en el for determina donde esta la posicion libre
    			//Con push agregamos cada posicion con el valor que se esta concatenando
                nuevaSolucion.push(solucion.concat([nuevaColumna]))
        }
    }
    return nuevaSolucion;
}
 
validar(nuevaFila, nuevaColumna, solucion): Boolean {
    for (var i = 0; i < nuevaFila; i++) {
    	//Este if compara la fila en la posicion[i] (columna) con la columna nueva en la misma posicion
    	//O la columna y de la siguiente fila
    	//O la columna de la fila anterior
    	//Si se parece a alguna estan igual en Cero y no hay valores encontrados y concatena
        if (solucion[i]==nuevaColumna || solucion[i]+i == nuevaColumna+nuevaFila || solucion[i]-i == nuevaColumna-nuevaFila) {
                return true;
        }
    }
    return false;
}