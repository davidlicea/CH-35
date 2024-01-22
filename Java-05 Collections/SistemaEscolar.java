package org.generation.exercises;

import java.util.ArrayList;
import java.util.Scanner;

/*
 * Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
 * -- Requerimientos:
 * 		> Utilizar ArrayList para guardar a los estudiantes
 * 		> Scanner para interactuar con el usuario y permitir que agregue estudiantes
 * 		> Loop para permitir que se agreguen varios estudiantes (do-while)
 * 		> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, !=, switch son posibles opciones)
 * 		> Mostrar lista de estudiantes (for-each) 
 */

public class SistemaEscolar {
	public static void main(String[] args) {
		
		//Inicializar un ArrayList para guardar a los estudiantes
				ArrayList<String> estudiantes = new ArrayList <String>();
				
				//Scanner para el usuario
				Scanner scanner = new Scanner(System.in);
				
				//Loop para permitir agregar usuarios
				String nombreEstudiante; //Inicializando de manera global
				do {
					System.out.println("Ingresa el nombre del estudiante. Escribe 'Salir' para finalizar");
					nombreEstudiante = scanner.nextLine(); //Invocando de manera local
					estudiantes.add(nombreEstudiante);
					
				} while(!nombreEstudiante.equals("Salir") && !nombreEstudiante.equals("salir")); //Siempre que NO se escriba "Salir", el loop se sigue ejecutando
				
				
				//Mostrar lista de estudiantes (for-each)
				System.out.println("** Lista de estudiantes:");
				for (String estudiante : estudiantes) {
					//Si no quiero que se muestre la palabra "Salir" voy agregar una condicional sobre la variable que guarda a los elementos que iteran sobre el ArrayList
					if(!estudiante.equals("Salir") && !estudiante.equals("salir")) {
						System.out.println(estudiante);
					}
						
				}
				
				scanner.close ();
		
		/*
		 * Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'.
		 * Agregar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación 
		 */
		
		
		
		
	}//Siempre
}
