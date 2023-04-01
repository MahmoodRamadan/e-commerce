import Joi from 'joi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import React, {useState} from 'react'



const Register = () => {
     
  let navigate = useNavigate
    let [errorList,setErrorList] = useState([])

    let [user, setUser] = useState({
        name: '',
        email: '',
        age: 0,
        password: ''
    })
     function getUserData(e) {
             let myUser = user;
             myUser[e.target.name]= e.target.value;
             setUser(myUser);
             console.log(user)
     }

    async function submitRegister(e) {
        e.preventDefault()
       let resultvalidation = validationRegisterUser(user);
       if (resultvalidation.error) {

        //list error
        setErrorList(resultvalidation.error.details)
       }else{
           
       let {data} = await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup",user)
        //go to backend
        if(data.message === 'success'){
          navigate('/login')
        }
       }
        
     }

     function validationRegisterUser(user) {
        let schema = Joi.object({
            name: Joi.string().min(4).max(20).required(),
            age: Joi.number().min(20).max(80),
            email:Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().required().pattern(/^[A-Z][a-z]{3,8}$/).messages({
                "string.pattern.base": "invalid password pattern",
                "string.empty": "password is empty"
            }),
            cPassword: Joi.valid(Joi.ref('password')).required()
    })
    return schema.validate(user)
            
     }
   
  return (
    <>

    {errorList.map((err,index)=>
    <div className='alert alert-danger'>
        {err.message}
    </div>)}
 <form onSubmit={submitRegister}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">name</label>
    <input onChange={getUserData} name="name" type="name" className="form-control" id="name" aria-describedby="name" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input onChange={getUserData} name="email" type="email" className="form-control" id="email" aria-describedby="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="age" className="form-label">age</label>
    <input onChange={getUserData} name="age" type="number" className="form-control" id="age" aria-describedby="age" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input onChange={getUserData} name="password"  type="password" className="form-control" id="password" aria-describedby="password" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input onChange={getUserData} name="cPassword"  type="password" className="form-control" id="password" aria-describedby="password" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </>
  )
}

export default Register