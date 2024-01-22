package org.generation.collections;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// HashSet es una calse de Collections donde cada elemento es unico, es decir, no se repiten los elementos.
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Buho");
		animals.add("Caballo");
		animals.add("Perro");
		animals.add("Gato");
		animals.add("Ornitorinco");
		animals.add("Mapache");
		animals.add("Capibara");
		animals.add("Capibara");
		
		//Imprimir el HashSet
		System.out.println(animals);
		
		//Conocer si un elemento se encuentra dentro del Set: contains();
		animals.contains("Capibara");
		
		//Eliminar un elemento: remove();
		animals.remove("Caballo");
		System.out.println(animals);
		
	
		/**
		 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
		 */
		
		animals.clear();
		System.out.println(animals);
		
		
		
		
	} //Siempre

}
