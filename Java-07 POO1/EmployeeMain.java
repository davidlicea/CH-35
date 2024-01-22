package org.generation.employee;

public class EmployeeMain {
	public static void main(String[]args) {
		// Instanciar los objetos
		Employee Daniel = new Employee("Daniel", "Maldonado", 7836, 8596.33d, "Instructor");
		Employee Abigail = new Employee("Abigail", "Martinez", 5274, 18754.20d, "Desarrolladora FrontEnd");
		Employee Arturo = new Employee("Arturo", "Avila", 4403, 17999.62d, "Desarrollador BackEnd");
		
		System.out.println(Daniel);
		System.out.println(Abigail);
		System.out.println(Arturo);
		
		//Aplicando metodos definidos previamente (trabajar, calcularSalario, capacitarse, infoGeneral)
		Daniel.infoGeneral();
		Arturo.calcularSalario();
		Abigail.capacitarse();
		
		//Utilizar informacion especifica de cada objeto mediante sus propiedades 
		System.out.println(Daniel.getNombre() + " " + Daniel.getApellido() + " ocupa el puesto de " + Daniel.getPuesto());
		System.out.println(Abigail.puesto + " gana $" + Abigail.salario + " pesos");
		
		//Actualizando informacion mediante Setter
		Arturo.setSalario(24598.11);
		Arturo.calcularSalario();
		
		
		
		
	} //Siempre
}
