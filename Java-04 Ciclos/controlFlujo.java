package ciclosMar;
import java.util.Scanner;
public class controlFlujo {

	public static void main(String[] args) {
		
		//Recuerda que para que algo se ejecute, siiempre debe de ir en el metodo principal
		
		
				//Primero defino una variable del tipo String donde se almacena un dato
				 // Dejo en null y despues agrego fecha 
				// Variable declarada e inicializada, en null a proposito, para tener un "espacio" de memoria ya asignado, y solo reemplazarlo con un nuevo dato
				
				//Para validar si podemos viajar en cierta fecha
				
		//Validacion de contraseña
				/*Scanner scanner = new Scanner(System.in);

		        // Solicitar la primera contraseña
		        System.out.print("Ingrese la contraseña: ");
		        String contraseña1 = scanner.nextLine();

		        // Solicitar la segunda contraseña
		        System.out.print("Ingrese la contraseña nuevamente: ");
		        String contraseña2 = scanner.nextLine();

		        // Verificar si las contraseñas coinciden
		        if (contraseña1.equals(contraseña2)) {
		            System.out.println("Las contraseñas coinciden. Acceso permitido.");
		        } else {
		            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
		        }

		        // Cerrar el scanner
		        scanner.close();*/
		        
		        ///////////////////////////////////////////////////////////////
		  		System.out.print("Bienvenido a la dulceria, que desea ordenar?\n"
					+ "1. Palomitas\n"
					+ "2. Refresco\n"
					+ "3. Nachos\n"
					+ "4. HotDog\n"
					+ "5. Pagar\n"
					+ "\n");		
		
		  		Scanner scanner = new Scanner(System.in);
				System.out.println("Ingresa una opcion: ");
		        int menu = scanner.nextInt(); ;
		        
		        System.out.print("Bienvenido a la dulceria, que desea ordenar?\n"
						+ "1. Palomitas\n"
						+ "2. Refresco\n"
						+ "3. Nachos\n"
						+ "4. HotDog\n"
						+ "5. Pagar\n"
						+ "\n");
		        
		        switch (menu) {
		        case 1: 
		        	System.out.println("Usted ha agregado palomitas a su combo.");
		        	break;
		        case 2: 
		        	System.out.println("Usted ha agrado refresco a su combo");
		        	break;
		        case 3: 
		        	System.out.println("Usted ha agregado nachos a su combo.");
		        	break;
		        case 4: 
		        	System.out.println("Usted ha agregado hotdog a su combo");
		        	break;
		        case 5:
		        	System.out.println("Ustead ha seleccionado pagar su combo.");
		        	break;
		        default:
		        	System.out.println("Do babe");
		        	break;
		        }
		        
	}

}
