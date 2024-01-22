package tiposDeDatosYVariables;

public class EjercicioDatos {

	public static void main(String[] args) {
		
		System.out.println("Hola mundo");
		
		/*
		 *Comentarios multilinea
		*/
		
		//Comentarios de una sola linea
		
		byte edad = 27; //Representa un numero entero 8 bits (-128 al 127)
		System.out.println("Edad del participante " + edad);
		
		short usuariosNuevos = 200; //Representa un numero entero 16 bits (-23768 al 32767)
		
		System.out.println("Usuarios nuevos " + usuariosNuevos);
		
		int usuariosPremium = 354; //Representa un numero entero 32 bits (-2147403640 al 2147403640)
		
		System.out.println("Usuarios premium " + usuariosPremium);
		
		//Tipos de datos con numero decimales 
		
		float altura = 1.61f;//Sirve para representar un valor numerico con numeros decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
				
		System.out.println("Altura del usuarix "+altura);
				
		double peso = 65.4;//Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
		
		System.out.println("El peso de David es " + peso);
		
		String nombreUsuario = "David";
		String costoBoleto = "500";
		String zonaBoleto = "52";
		
		System.out.println("Usuario " + nombreUsuario);
		
		char seccion = 'f';
		
		System.out.println("Sección " + seccion);
		
		boolean clienteFrecuente = true; 
	
		System.out.println(clienteFrecuente + " Es un cliente frecuente");
		
		//Conversion de tipos 
		
		//Casteo a entero 
		
		int pesoCambio = (int) peso;
		
		//casteo entero
		
		long pesoCambio1 = (long) peso;
		
		System.out.println("double " + peso);
		
		System.out.println("int " + pesoCambio);
		
		System.out.println("long " + pesoCambio1);
		
		int nombreCambio = Integer.parseInt(costoBoleto);
		double zonaCambio = Double.parseDouble(zonaBoleto);
		
		System.out.println("Zona de usuario segun su boleto " + (costoBoleto + zonaCambio));
		
		/*Operadores aritmeticos 
		+ suma
		- resta
		* multiplicacion
		/ division
		 % Residuo*/
		
		
		/*Operadores de compararcion 
		 == compara si un opernado es igual a otro 
		 != compara si es diferente 
		 >  mayor que 
		 <  menor que 
		 >= mayor o igual que 
		 <= menor o igual que */
		
		int numeroSalas = 10;
		int numeroAsientos = 50; 
		double precioBoleto = 75.50;
		double precioPalomitas = 89.70;
		double precioBebidas = 35.50;
		int personasDentro = 342; 
		int capacidadTotal = 500;
		
		if (personasDentro > capacidadTotal) {
			System.out.println("Aforo lleno");
		}
		
		double totalEntradas = personasDentro * precioBoleto;
		double totalPalomitas = personasDentro * precioPalomitas; 
		double totalBebidas = personasDentro * precioBebidas;
		
		System.out.println("Total de personas " + personasDentro);
		System.out.println("Total de entradas $" + totalEntradas);
		System.out.println("Total de palomitas $" + totalPalomitas);
		System.out.println("Total de bebidas $" + totalBebidas);
		
		/*Operadores lógicos 
		 * && si ambas se cumplen da true 
		 * || devuelve verdadero si una de las declaraciones es verdadera 
		 * not */
		
		
		
		
		
		
	}

}
