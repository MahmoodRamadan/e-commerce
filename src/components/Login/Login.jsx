import Joi from 'joi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import React, {useState} from 'react'


const Login = () => {

  let navigate = useNavigate
  let [errorList,setErrorList] = useState([])

  let [user, setUser] = useState({
     
      email: '',
     
      password: ''
  })
   function getUserData(e) {
           let myUser = user;
           myUser[e.target.name]= e.target.value;
           setUser(myUser);
           console.log(user)
   }

  async function submitLogin(e) {
      e.preventDefault()
     let resultvalidation = validationLoginUser(user);
     if (resultvalidation.error) {

      //list error
      setErrorList(resultvalidation.error.details)
     }else{
         
     let {data} = await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin",user)
      //go to backend
      if(data.message === 'success'){

        localStorage.setItem("userToken",data.token)
        navigate('/home')
      }
     }
      
   }

   function validationLoginUser(user) {
      let schema = Joi.object({
         
          email:Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
          password: Joi.string().required().pattern(/^[A-Z][a-z]{3,8}$/).messages({
              "string.pattern.base": "invalid password pattern",
              "string.empty": "password is empty"
          }),
         
  })
  return schema.validate(user)
          
   }
 
  return (
    <div>
          {errorList.map((err,index)=>
    <div className='alert alert-danger'>
        {err.message}
    </div>)}
 <form onSubmit={submitLogin}>
  
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input onChange={getUserData} name="email" type="email" className="form-control" id="email" aria-describedby="email" />
  </div>
  
  <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input onChange={getUserData} name="password"  type="password" className="form-control" id="password" aria-describedby="password" />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    
    </div>
  )
}

export default Login