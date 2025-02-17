package com.example.demo.entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.OptBoolean;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "demo1")
public class CustomerEntity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private int cus_id;
	
	@Column(name = "Name")
	@NotBlank(message = "Name is required")
	private String cus_name;
	
	@Column(name = "Age")
	@NotNull(message = "Age is required")
	@Max(60)
	@Min(18)
	private int cus_age;
	
	@Column(name = "Gender")
	@NotBlank(message = "Gender is required")
	private String cus_gen;
	
	@Column(name = "Language")
	@NotBlank(message = "Language is required")
	private String cus_lang;
	
	@Column(name = "DOB")
	@NotNull(message = "DOB is required")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", lenient = OptBoolean.FALSE)
	private Date cus_dob;
	
	@Column(name = "Address")
	@NotBlank(message = "Address is required")
	private String cus_addr;
	
	public CustomerEntity() 
	{
		super();
	}

	public CustomerEntity(int cus_id, String cus_name, int cus_age, String cus_gen, String cus_lang, Date cus_dob,
			String cus_addr) {
		super();
		this.cus_id = cus_id;
		this.cus_name = cus_name;
		this.cus_age = cus_age;
		this.cus_gen = cus_gen;
		this.cus_lang = cus_lang;
		this.cus_dob = cus_dob;
		this.cus_addr = cus_addr;
	}

	public int getCus_id() {
		return cus_id;
	}

	public void setCus_id(int cus_id) {
		this.cus_id = cus_id;
	}

	public String getCus_name() {
		return cus_name;
	}

	public void setCus_name(String cus_name) {
		this.cus_name = cus_name;
	}

	public int getCus_age() {
		return cus_age;
	}

	public void setCus_age(int cus_age) {
		this.cus_age = cus_age;
	}

	public String getCus_gen() {
		return cus_gen;
	}

	public void setCus_gen(String cus_gen) {
		this.cus_gen = cus_gen;
	}

	public String getCus_lang() {
		return cus_lang;
	}

	public void setCus_lang(String cus_lang) {
		this.cus_lang = cus_lang;
	}

	public Date getCus_dob() {
		return cus_dob;
	}

	public void setCus_dob(Date cus_dob) {
		this.cus_dob = cus_dob;
	}

	public String getCus_addr() {
		return cus_addr;
	}

	public void setCus_addr(String cus_addr) {
		this.cus_addr = cus_addr;
	}
	
		
}
