package com.lokl.loklUser.model;

/*
 * En la clase donde se establece la lógica del negocio (model) voy a hacer que coincida con mi DB.
 * Es decir, la clase se convierte en una Entity, con la anotación @Entity 
 * Para establecer la tabla de la DB a la que corresponde esta entidad, utilizamos la anotación @Table(name="table") y el nombre de la tabla
 * Indicarle a JPA mi punto de entrada (PK), usando la anotación @Id
 * Como queremos que el Id sea autoincrementable usamos la anotación @GeneratedValue(strategy = GenerationType.IDENTITY
 * Y si queremos, podemos establecer la columna a la que corresponde cada atributo con la anotación @Column(name="name")
 * 
 */

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="user") //nombre de la tabla de la DB
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_usuario")
	private Long id;
	@Column(name="correo")
	private String correo;
	@Column(name="contrasena")
	private String contrasena;
	@Column(name="perfil_anfitrion_id_perfil_anfitrion")
	private Long perfil_anfitrion_id_perfil_anfitrion;

	
	// JPA necesita un metodo que le permita contruir cualquier objeto sin tomar en cuenta sus atributos
	public User() {
	}

	
	//Constructor
	public User(Long id, String correo, String contrasena, Long perfil_anfitrion_id_perfil_anfitrion) {
		this.id = id;
		this.correo = correo;
		this.contrasena = contrasena;
		this.perfil_anfitrion_id_perfil_anfitrion = perfil_anfitrion_id_perfil_anfitrion;
	}


	//Getters y Setters
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getCorreo() {
		return correo;
	}


	public void setCorreo(String correo) {
		this.correo = correo;
	}


	public String getContrasena() {
		return contrasena;
	}


	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}


	public Long getPerfil_anfitrion_id_perfil_anfitrion() {
		return perfil_anfitrion_id_perfil_anfitrion;
	}


	public void setPerfil_anfitrion_id_perfil_anfitrion(Long perfil_anfitrion_id_perfil_anfitrion) {
		this.perfil_anfitrion_id_perfil_anfitrion = perfil_anfitrion_id_perfil_anfitrion;
	}


	//toString
	@Override
	public String toString() {
		return "User [id=" + id + ", correo=" + correo + ", contrasena=" + contrasena
				+ ", perfil_anfitrion_id_perfil_anfitrion=" + perfil_anfitrion_id_perfil_anfitrion + "]";
	}

	//Tenemos que generar dos metodos adicionales: hashCode() y equals()
	
	@Override
	public int hashCode() {
		return Objects.hash(id,correo, contrasena,perfil_anfitrion_id_perfil_anfitrion);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(correo, other.correo) && Objects.equals(contrasena, other.contrasena)
				&& Objects.equals(id, other.id)
				&& Objects.equals(perfil_anfitrion_id_perfil_anfitrion, other.perfil_anfitrion_id_perfil_anfitrion);
	}

	
	
	
}
