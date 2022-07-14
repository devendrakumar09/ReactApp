import React from 'react'
import { Link } from "react-router-dom";
import { useParams} from 'react-router-dom';



export default function CreateNew(props) {   
    let { name } = useParams();
  return (
    <>
        <div className="row mt-2">
            <div className="col-lg-6 mt-4 pt-2 col-6">
                <div className=""  >
                    <Link to="/create" className="btn btn-outline-secondary btn-sm w-100 fw-bolder">Create your</Link>
                    {name}
                </div>
            </div>

            <div className="col-lg-6 mt-4 pt-2 col-6">
                <div className="">
                    <img src="whatsapp.png" alt="whatsaap" className='shadow me-4'/>  
                    <img src="facebook.png" alt="whatsaap" className='shadow'/>                                                  
                </div>
            </div>            
        </div>    
    </>
  )
}
