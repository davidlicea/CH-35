package org.generation.employee;

/*
 * La estructura básica para crear objetos es la siguiente
 * 		1. Atribuos o propiedades
 * 		2. Metodo constructor (1 - n métodos)
 *		3. Metodos del objeto (comportamiento)
 *		4. Metodo Getters y Setters
 *		5. Metodo toString 		 
 * */

public class Employee {
	// 1. Atributos o propiedades
	String nombre;
	String apellido;
	int id;
	double salario;
	String puesto;
	
	// 2. Metodo constructor, Tiene el mismo no mbre qu ela calse, no retorna nada, recibe parametros (atributos) y los asigna a variables del constructor (this)
	Employee(String nombre, String apellido, int id, double salario, String puesto) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.id = id;
		this.puesto = puesto;
		this.salario = salario;
	}
	
	// 3. Metodos de comportamiento 
	void trabajar() {
		System.out.println("Estoy trabajando");
	}
	
	void calcularSalario() {
		System.out.println("El salario del empleado es de " + this.salario + " pasos");
	}
	
	void capacitarse() {
		System.out.println("El trabajador del puesto " + this.puesto + " se capacita");
	}
	
	void infoGeneral() {
		System.out.println("Id: " + this.id + " Nombre: " + this.nombre + " Apellido: " + this.apellido);
	}
	
	// Getters y Setters. Son metodos que nos permiten obtener o enviar informacion que esta protefiga por modificadores de acceso y de esta manera interactuar con nuestros objetos. Los getters nos permiten obtener la info y los setters nos permiten enviar la info 
	
	/*
	 * Estructura de Getter:
	 * 		public tipoDato getNombreVariable () {
	 * 			return nombreVariable;
	 * 		}
	 * 		p.e.
	 * 			public String getNombre () {
	 * 				return nombre;	
	 * 			}
	 * Estructura de Setter:
	 * 		public void setNombreVariable (variable) {
	 * 			this.variable = variable;
	 * 		}
	 * 		p.e.
	 * 			public void setNombre (String nombre) {
	 * 				this.nombre = nombre;	
	 * 			}
	 * Podemos inicializar Getters y Setters dando click derecho > Source > Generate Getters y Setters
	 */
	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	
	
	// 5. Metodo toString. Es un "Override" que se refiere a la capacidad de proporcionar informacion especifica de una clase en forma de cadena de caracteres
	//Podemos inicializar toString dar click derecho > Source > Generate toString > Fields > Generate
	
	@Override
	public String toString() {
		return "Employee ["
				+ "nombre=" + nombre + ", "
				+ "apellido=" + apellido + ","
				+ " id= " + id + ","
				+ " salario=" + salario
				+ ", puesto=" + puesto + 
				"]";
	}
	
	
	
	
	
	
	
	
}
