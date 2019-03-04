import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reinas';
  public respuesta: any;
  public arreglo: any[] = [[]];
//Utilizando backtracking
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
    //anterior toma el valor que nos dira en que nivel del arbol de busqueda estamos
    for (var i = 0; i < anterior.length; i++) { 
        var solucion = anterior[i];
        //console.log(solucion); //Se haran las comparaciones en el nivel del arbol que el para cada fila
        for (var nuevaColumna = 0; nuevaColumna < columnas; nuevaColumna++) {
        	//Ciclo para enviar cada opcion del arbol a validar revisando cada columna de la fila en la que estamos
        	//Nueva columna es el valor donde se esta colocando la reina, lo incrementamos para recorrer las posiciones(fila) del tablero
            if (!this.validar(nuevaFila, nuevaColumna, solucion))
    			//Concatenamos solo las opciones validas [0,4,7,5......]
                nuevaSolucion.push(solucion.concat([nuevaColumna]))
        }
    }
    return nuevaSolucion;
}
 
validar(nuevaFila, nuevaColumna, solucion): Boolean {
    for (var i = 0; i < nuevaFila; i++) {
        if (solucion[i]==nuevaColumna ||  //Comparamos en vertical (Fila)
        	solucion[i]+i == nuevaColumna+nuevaFila || //Comparamos en Diagonales
        	solucion[i]-i == nuevaColumna-nuevaFila) {
                return true;
        }
    }
    return false;
}


  ngOnInit(){
  	console.log(this.reinas(8,8));
  }

}