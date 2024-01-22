package org.generation.collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		//************Arrays**************//
		
		String[] names = {"Eunice", "Yonuel", "Rey", "Lucero", "Elizabeth", "Fernanda", "Rene", "Rocio",};
		//Imprimiendo Arrays
		System.out.println(Arrays.toString(names));
		
		int[] edades = {12, 3, 25, 55, 69, 41, 29, 37, 18};
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elemento del Array 
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es " + name1);
		int edad1 = edades[2];
		System.out.println("La edad de " + name1 + " es de " + edad1 + " años");
		
		//Obtener la longitud del Array
		int longitudNames = names.length;
		System.out.println("El Array names tiene " + longitudNames + " elementos");
		
		//Obtener el ultimo elemento 
		String ultimoElemento = names[longitudNames - 1]; //En caso de no tener una variable para lenght se utiliza metodos names.lenght - 1
		System.out.println("El ultimo elemento del Array names es " + ultimoElemento);
		
		//Moestrar cada elemento utilizando forEach
		for (String name : names) {
			System.out.println(name);
		}
		
		//****************ArrayList***************//
		//ArrayList es un array que peude cambiar de tamaño. Es la clase de Java que representa la estructura de datos de Arryas. Permite elementos duplicados y recibe varios metodos para su manipulación 
		
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<Integer>();
		ArrayList<Character> character = new ArrayList<>();
		
		//Agregar elementos 
		films.add("Inception");
		films.add("Se7en");
		films.add("The Shining");
		films.add("Pulp Fiction");
		films.add("Mr Nobody");
		films.add("The Shutter Island");
		films.add("Ready Player One");
		
		System.out.println(films);
		
		//Obtener un elemento: name.get(index);
		String film1 = films.get(0);
		System.out.println("La primer pelicula es " + film1);
		
		//Modificar un elemento: name.set(index, newValue)
		String film3 = films.set(3, "Memento");
		String film3Get = films.get(3);
		System.out.println(film3Get);
		
		//Conocer el tamaño del ArrayList: name.size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del ArrayList es de " + sizeFilms + " Elementos");
		
		
		//Agregar un elemento y despues eliminarlo
		films.add("The Fountain");
		System.out.println(films);
		
		films.remove(7);
		System.out.println(films);
		
		System.out.println("*** Films en lista ****");
		for (String film : films) {
			System.out.println(film);
		}
		
		matricula.add(25253);
		character.add('A');
		
		System.out.println(matricula);
		System.out.println(character);
		
 
		
		
		
		
		
		
		
		
		

	}//Siempre

}
