package org.generation.letras;

import java.util.Scanner;

/*
 * Crear un programa que le solicite un mensaje al usuario y cuente cuantas vocales, consontantes, numeros y caracteres posee dicho mensaje
 *		Letras: metodos para interactuar con el usuario 		
 *		LetrasMain: instanciar los objetos
 *		Contador: metodos para contar vocales, consonantes, numero y simbolos
 */
public class Letras {
	//Para que nuestro usuario interactue, definimos un Scanner
	Scanner scanner = new Scanner(System.in);
	
	//Metemos el Scanner dentro de un metodo
	public String leerEntrada() {
		return scanner.nextLine();
	}
	
	//Metodo para mostrar el mensaje solicitado al usuario
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}














}
