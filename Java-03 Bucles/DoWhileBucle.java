package bucles;
import java.util.Scanner;
public class DoWhileBucle {
	public static void main(String[]args) {
		
		int cuenta = 5;
		do {
			System.out.println("cuenta " + cuenta + " Total");
			cuenta++;
		} while (cuenta < 0); 

		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		
		System.out.println("Bienvenido al banco City Generation, eliga algunas de nuestras opciones disponibles. ");
		
		System.out.println("1. Consultar saldo");
		System.out.println("2. Ingresar dineros");
		System.out.println("3. Retirar dineros");
		System.out.println("4. Salir");
		
		Scanner scr = new Scanner(System.in);
		int opcion; 
		
		do {
			opcion = scr.nextInt();
			
			switch(opcion) {
			case 1: System.out.println("Consultar saldo");
				break;
			case 2: System.out.println("Ingresaar dineros");
			break;
			case 3: System.out.println("Retirar dineros");
			break;
			case 4: System.out.println("Salir");
			break;
			default:
				System.out.println("Do babe sea Sergio");
				
			}
		} while(opcion != 4);
		
		scr.close();
	
	
	
	}
}
