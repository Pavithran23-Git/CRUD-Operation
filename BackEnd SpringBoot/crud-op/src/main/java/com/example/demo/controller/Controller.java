package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.CustomerEntity;
import com.example.demo.repository.Customer_Repository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(originPatterns = "http://localhost:3000/")
public class Controller
{
	@Autowired
	private Customer_Repository cusrepo;
	
	@GetMapping
	public ResponseEntity<List<CustomerEntity>> getall() 
	{
		return ResponseEntity.ok(cusrepo.findAll());
	}
	
	@PostMapping
	public ResponseEntity<?> saveuser(@Valid @RequestBody CustomerEntity cus)
	{
		CustomerEntity saveid = this.cusrepo.save(cus);
		return new ResponseEntity<CustomerEntity>(saveid, HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getid(@PathVariable ("id") int cus_id)
	{
		Optional<CustomerEntity> getuser = this.cusrepo.findById(cus_id);
		if(getuser.isEmpty())
		{
		String error = "Customer id not found"+cus_id;
		return ResponseEntity.status(HttpStatus.NOT_FOUND).contentType(MediaType.APPLICATION_JSON).body(error);
		}
		else
		{
			return ResponseEntity.ok(getuser.get());
		}
	}
	
	@DeleteMapping("/{id}")
		public ResponseEntity<?> deleteid(@PathVariable ("id") int cus_id)
		{
			Optional<CustomerEntity> deleteuser = this.cusrepo.findById(cus_id);
			if(deleteuser.isEmpty())
			{
				String error="Customer id not found in database"+cus_id;
				return ResponseEntity.status(HttpStatus.NOT_FOUND).contentType(MediaType.APPLICATION_JSON).body(error);
			}
			else
			{
				this.cusrepo.delete(deleteuser.get());
				return ResponseEntity.ok().body("deleted successfully");
			}
		}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateuser(@Valid @RequestBody CustomerEntity cus, @PathVariable ("id") int cus_id)
	{
		Optional<CustomerEntity> updateid = this.cusrepo.findById(cus_id);
		if(updateid.isEmpty())
		{
			String error = "Customer id not found in database"+cus_id;
			return ResponseEntity.status(HttpStatus.NOT_FOUND).contentType(MediaType.APPLICATION_JSON).body(error);
		}
		else
		{
			CustomerEntity up = updateid.get();
			up.setCus_name(cus.getCus_name());
			up.setCus_age(cus.getCus_age());
			up.setCus_gen(cus.getCus_gen());
			up.setCus_lang(cus.getCus_lang());
			up.setCus_dob(cus.getCus_dob());
			up.setCus_addr(cus.getCus_addr());
			
			return new ResponseEntity<CustomerEntity>(cusrepo.save(up), HttpStatus.OK);
		}
	}

}

