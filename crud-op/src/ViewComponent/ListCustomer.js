import React, { useEffect, useState } from "react";
import axios from 'axios';
import ServiceList from "../ListComponent/ServiceList";
import {Link, useNavigate} from 'react-router-dom';

const ListCustomer=()=>{

    const [customer, setCustomer] = useState([]);

    const history = useNavigate();

    const ListDetails=()=>{
        ServiceList.getallUser().then(
            (Response)=>{
                setCustomer(Response.data);
            }
        ).catch(error=>{
            console.log(error);
        })
    }

    useEffect(
        ()=>{
            ListDetails();
        },[]
    )

    const addPage=()=>{
        history("/add-user");
    }

    const updatePage=()=>{
        history("/update-user");
    }

    const deleteID=(id)=>{
        ServiceList.deleteUser(id).then(
            (Response)=>{
                console.log(Response.data);
                ListDetails();
            }
        ).catch(error=>{
            console.log(error);
        }) }
    return(
        <div className="card" style={{width:"90vw", textAlign:"center", marginTop:"2vw", margin:"auto"}}>
        {/* <Toast ref={toast} /> */}
      <div className="card-header"><h3>Manage Customer Details</h3></div>
      
      <div className="card-body">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-success" type="button" onClick={addPage}>Create +</button>
            </div> <br/>
            <table class="table table-bordered">
                <thead>
                <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Language</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
  <tbody>
    {
        customer.map(
            cust=>(
                <tr key={cust.cus_id}>
                    <td>{cust.cus_id}</td>
                    <td>{cust.cus_name}</td>
                    <td>{cust.cus_addr}</td>
                    <td>{cust.cus_age}</td>
                    <td>{cust.cus_gen}</td>
                    <td>{cust.cus_lang}</td>
                    <td>{cust.cus_dob}</td>
                    <td>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
  <Link to={`/update-user/${cust.cus_id}`} class="btn btn-primary" type="button" onClick={updatePage}>Update</Link>
  <button class="btn btn-danger" type="button" onClick={()=>deleteID(cust.cus_id)}>Delete</button>
</div>
                    </td>
                </tr>
            )
        )
    }
  </tbody>
  </table>
            </div>
        </div>
    )
}

export default ListCustomer;