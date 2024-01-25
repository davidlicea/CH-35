package org.generation.otroscuatro;

import java.util.Scanner; // Importante: Necesitas importar la clase Scanner

public class Codigo4 {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in); // Se corrigió la creación de Scanner

        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();

        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        Scanner s2 = new Scanner(System.in); // Se corrigió la creación de Scanner
        String j2 = s2.nextLine(); // Se corrigió la variable utilizada para el segundo jugador

        if (j1.equals(j2)) { // Se corrigió la condición de igualdad con equals
            System.out.println("Empate");
        } else {
            int g = 2;
            switch (j1) {
                case "piedra":
                    if (j2.equals("tijeras")) { // Se corrigió la condición de igualdad con equals
                        g = 1;
                    }
                    break; // Se agregó el break para salir del switch después de la comparación

                case "papel":
                    if (j2.equals("piedra")) { // Se corrigió la condición de igualdad con equals
                        g = 1;
                    }
                    break; // Se agregó el break para salir del switch después de la comparación

                case "tijeras":
                    if (j2.equals("papel")) { // Se corrigió la condición de igualdad con equals
                        g = 1;
                    }
                    break; // Se agregó el break para salir del switch después de la comparación
            }
            System.out.println("Gana el jugador " + g);
        }
    }
}
