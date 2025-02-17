import react, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceList from '../ListComponent/ServiceList';
import {useNavigate, useParams} from 'react-router-dom';

const Updateuser=()=>{

    const [cus_name, setcus_name] = useState("");
    const [cus_addr, setcus_addr] = useState("");
    const [cus_age, setcus_age] = useState("");
    const [cus_lang, setcus_lang] = useState("");
    const [cus_gen, setcus_gen] = useState("");
    const [cus_dob, setcus_dob] = useState("");

    const {cus_id} = useParams();
    const history = useNavigate("");

    useEffect(
        ()=>{
            ServiceList.getbyID(cus_id).then(
                (Response)=>{
            setcus_name(Response.data.cus_name);
            setcus_addr(Response.data.cus_addr);
            setcus_age(Response.data.cus_age);
            setcus_lang(Response.data.cus_lang);
            setcus_gen(Response.data.cus_gen);
            setcus_dob(Response.data.cus_dob);
        }
    )},[cus_id]
        )

    const updateCustomer=(e)=>{
        e.preventDefault();
        if(validation()){
        const cusData={cus_name, cus_addr, cus_age, cus_lang, cus_gen, cus_dob};
    ServiceList.updateUser(cus_id, cusData).then(
        (Response)=>{
            console.log(Response.data);
            history("/");
        }
    ).catch(error=>{
        console.log(error);
    })}
}

const homePage=()=>{
    history("/");
}

    const [errors, setErrors] = useState({});

    const validation=()=>{
        let formErrors = {};
        let isValid = true;

        if(!cus_name) {
            isValid = false;
            formErrors ['cus_name'] = "Please enter the name";
        }

        if(!cus_addr) {
            isValid = false;
            formErrors ['cus_addr'] = "Please enter the address";
        }

        if(!cus_age) {
            isValid = false;
            formErrors ['cus_age'] = "Please enter the age";
        }

        if(!cus_lang) {
            isValid = false;
            formErrors ['cus_lang'] = "Please enter the language";
        }

        if(!cus_gen) {
            isValid = false;
            formErrors ['cus_gen'] = 'Please enter the Gender';
        }

        if(!cus_dob) {
            isValid = false;
            formErrors ['cus_dob'] = 'Please enter the DOB';
        }

        setErrors(formErrors);
        return isValid;

    }

    return(
        <div className='card' style={{width:"35vw", margin:"auto", textAlign:"left"}}>
            <div className='card-header'><h3>Update Customer Details</h3></div>
            <div className='card-body'>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>Name</h6></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" value={cus_name} onChange={(e)=>setcus_name(e.target.value)}/>
  {errors.cus_name && <div className='text-danger'>{errors.cus_name}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><h6>Address</h6></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={cus_addr} onChange={(e)=>setcus_addr(e.target.value)}></textarea>
  {errors.cus_addr && <div className='text-danger'>{errors.cus_addr}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>Age</h6></label>
  <input type="number" class="form-control" id="exampleFormControlInput1" value={cus_age} onChange={(e)=>setcus_age(e.target.value)} />
  {errors.cus_age && <div className='text-danger'>{errors.cus_age}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>Gender</h6></label>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="gender" value="Male" checked={cus_gen=="Male"} id="flexRadioDefault1" onChange={(e)=>setcus_gen(e.target.value)}/>
  <label class="form-check-label" for="flexRadioDefault1" >
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" value="Female" checked={cus_gen=="Female"} id="flexRadioDefault2" onChange={(e)=>setcus_gen(e.target.value)} />
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
{errors.cus_gen && <div className='text-danger'>{errors.cus_gen}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>Language</h6></label>
  <select class="form-select" aria-label="Default select example" value={cus_lang} onChange={(e)=>setcus_lang(e.target.value)}>
  <option selected>Select Language</option>
  <option value="English">English</option>
  <option value="Tamil">Tamil</option>
  <option value="Hindi">Hindi</option>
</select>
{errors.cus_lang && <div className='text-danger'>{errors.cus_lang}</div>}
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h6>DOB</h6></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" value={cus_dob} onChange={(e)=>setcus_dob(e.target.value)}/>
  {errors.cus_dob && <div className='text-danger'>{errors.cus_dob}</div>}
</div>

<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-success" type="button" onClick={(e)=>updateCustomer(e)}>Update</button>
  <button class="btn btn-primary" type="button" onClick={homePage}>back</button>
</div>
            </div>
        </div>
    )
}

export default Updateuser;