import React, { useState } from 'react';
import '../inputBox.css';
import { Link } from 'react-router-dom';
import CreateNew from './CreateNew';

export default function InputText() {
  const [name, setName]  = useState('');
  const TextBoxChange = (event) => {
    setName(event.target.value);
    console.log(name);
    <CreateNew url='asdhashd asdh ' />
  }

  return (
    <>
       <div className="row height d-flex justify-content-center align-items-center d-flex align-items-center mb-4">
            <div className="col-md-10 col-10">
                <div className="">
                    <input type="text" className="form-control" placeholder="Your Name Here.." aria-label="Your Name Here.." value={name} onChange={TextBoxChange} />                    
                </div>                        
            </div>
            <div className="col-sm-2 col-2 text-center">
              <Link to={{ pathname: `/${name}` }} >
                <img src="check.png" alt="Check" className='rounded-circle shadow' />
              </Link>
            </div>
        </div>
    </>
  )
}
