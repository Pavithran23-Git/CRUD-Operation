import React, { useState } from "react";
import axios from 'axios';
import ServiceList from "../ListComponent/ServiceList";
import {useNavigate} from 'react-router-dom';

const AddUser=()=>{

    const [cus_name, setcus_name] = useState("");
    const [cus_addr, setcus_addr] = useState("");
    const [cus_age, setcus_age] = useState("");
    const [cus_gen, setcus_gen] = useState("");
    const [cus_dob, setcus_dob] = useState("");
    const [cus_lang, setcus_lang] = useState("");

    const history = useNavigate();

    const addCusomer=(e)=>{
        e.preventDefault();
        if(Validation()){
        const cusData={cus_name, cus_addr, cus_age, cus_gen, cus_dob, cus_lang};
        ServiceList.createUser(cusData).then(
            (Response)=>{
                console.log(Response.data);
                history("/");
            }
        ).catch(
            error=>{
                console.log(error);
            }
        )
    }
    }

    const homePage=()=>{
        history("/");
    }

    const [errors, setErrors] = useState({});

    const Validation=()=>{
        let formErrors={};
        let isValid = true;

        if(!cus_name) {
            isValid = false;
            formErrors['cus_name'] = "Please enter the name";
        }

        if(!cus_addr) {
            isValid=false;
            formErrors['cus_addr'] = 'Please enter the address';
        }

        if(!cus_age) {
            isValid=false;
            formErrors['cus_age'] ='Please enter the age';
        }

        if(!cus_lang) {
            isValid=false;
            formErrors['cus_lang'] = 'Please enter the Lnaguage';
        }

        if(!cus_gen) {
            isValid=false;
            formErrors['cus_gen'] ='Please enter the gender';
        }

        if(!cus_dob) {
            isValid=false;
            formErrors['cus_dob'] = 'Please enter the DOB';
        }

        setErrors (formErrors);
        return isValid;
    }

    return(
        <div className="card" style={{width:'35vw', textAlign:"left", margin:"auto"}}>
            <div className="card-header"><h3>Add Customer Details</h3></div>
            <div className="card-body">
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>Name</h6></label>
  <input type="name" class="form-control" id="exampleFormControlInput1" onChange={(e)=>setcus_name(e.target.value)} />
{errors.cus_name && <div className="text-danger">{errors.cus_name}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><h6>Address</h6></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setcus_addr(e.target.value)}></textarea>
{errors.cus_addr && <div className="text-danger">{errors.cus_addr}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>Age</h6></label>
  <input type="number" class="form-control" id="exampleFormControlInput1" onChange={(e)=>setcus_age(e.target.value)} />
{errors.cus_age && <div className="text-danger">{errors.cus_age}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>Language</h6></label>
  <select class="form-select" aria-label="Default select example" onChange={(e)=>setcus_lang(e.target.value)}>
  <option selected>Select Language</option>
  <option value="English">English</option>
  <option value="Tamil">Tamil</option>
  <option value="Hindi">Hindi</option>
</select>
{errors.cus_lang &&<div className="text-danger">{errors.cus_lang}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>Gender</h6></label>
  <div class="form-check">
  <input  type="radio"value="Male" name="gender" id="Male" onChange={(e)=>setcus_gen(e.target.value)}/>
  <label for="Male">    Male  </label>
</div>
<div class="form-check">
  <input  type="radio" value="Female" name="gender" id="Female" onChange={(e)=>setcus_gen(e.target.value)}/>
  <label for="Female">    Female  </label>
</div>
{errors.cus_gen && <div className="text-danger">{errors.cus_gen}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>DOB</h6></label>
  <input type="date" class="form-control" id="exampleFormControlInput1"  onChange={(e)=>setcus_dob(e.target.value)}/>
{errors.cus_dob && <div className="text-danger">{errors.cus_dob}</div>}
</div>

<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-success" type="button" onClick={(e)=>addCusomer(e)}>Save</button>
  <button class="btn btn-info" type="button" onClick={homePage}>Back</button>
</div>
            </div>
        </div>
    )
}

export default AddUser;