package operadoresLogicos;

public class EjercicioOperadores {

	public static void main(String[] args) {
		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
		
		//&& and
		int anios = 5;
		
		boolean esInfante = true; 
		
		boolean costoInfante = anios <= 12 && esInfante;
		
		System.out.println("Es peque " + costoInfante);

		String cliente = "cliente123";
		String credenciales = "fertakisfuego123";
		
		boolean credencialCorrecta = cliente.equals("cliente123")&& credenciales.equals("fertakisfuego123");
		
		System.out.println("Las credenciales si son validas " + credencialCorrecta);
		
		//|| or
		
		double costoPasaje = 380.50;
		int edad  = 58;
		boolean credenInapam =false; 
		
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		
		System.out.println("Tiene descuento? " + costoPasaje);
		
		//! not 
		
		
		boolean asientosDisponibles = true;
		boolean libres = true;
		boolean asientosConDescuento = !libres;
		
		System.out.println("Tenemos asientos con descuento " + asientosConDescuento);
		
		// Ejercicio
		int costoBoleto=350;
		int capacidadTotal= 62; //asientos
		int asignadosAncianos=4; //destinados a adultxs mayores
		int asignadosEstudiantes=6; //a estudiantes
		//descuento a inapam es de 35%
			//a estudiantes 30%
			 //* 
		double maxCompra =((asignadosAncianos*(costoBoleto*0.65))+(asignadosEstudiantes*(costoBoleto*0.65)+((capacidadTotal-asignadosAncianos)-asignadosEstudiantes)*costoBoleto));
		
	}
	

}
