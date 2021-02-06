import React,{ useState } from "react"
import UserService from"../newfrontend/UserService1"

// import "../styling/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
 

 const Addinput=()=>{
     const initializeUser = {
         firstName:'',
         lastName:'',
         city:'',
         Address:'',
         email:'',
         Mobile_no:''
     }
const [user,setUser]=useState(initializeUser);
const[submitted,setSubmitted]=useState(false);

      const onChange=(event)=>{
         const{name,value}=event.target

         setUser({...user,[name]:value})
         
     }

    const saveUser=()=>{
         var userData={
             firstName:user.firstName,
             lastName:user.lastName,
             city:user.city,
             Address:user.Address,
             email:user.email,
             Mobile_no:user.Mobile_no
         }
         UserService.saveUser(userData)
         .then((response)=>{
             console.log(response.data)
             if(response.data.status==200){
                 setSubmitted(true)
             }
         })

     }
     return(
         <div className="submit-form">{
            submitted ? (
                            <div> 
                                User Added Successfully......
                            </div>
    
                        ):(
                        <div className="container">
                            <div>
                                <lable htmlFor="firstName">FirstName:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={user.firstName}
                                    onChange={onChange}/>
                            </div>
                            <div>
                                <lable htmlFor="lastName">LastName</lable>
                                <input type="text" 
                                    className="form-control"
                                    name="lastName"
                                    value={user.lastName}
                                    onChange={onChange}/>
                            </div>
                            <div> 
                                <lable htmlFor="city">city</lable>
                                <input type="text" className="form-control" 
                                name="city"
                                value={user.city}
                                onChange={onChange}/>
                            </div>
                            <div> 
                                <lable htmlFor="Address">Address</lable>
                                <input type="text" className="form-control" 
                                name="Address"
                                value={user.Address}
                                onChange={onChange}/>
                            </div>
                            <div> 
                                <lable htmlFor="email">email</lable>
                                <input type="email" className="form-control" 
                                name="email"
                                value={user.email}
                                onChange={onChange}/>
                            </div>
                            <div> 
                                <lable htmlFor="Mobile_no">Mobile_no</lable>
                                <input type="number" className="form-control" 
                                name="Mobile_no"
                                value={user.Mobile_no}
                                onChange={onChange}/>
                            </div>
                            <button type="button" className="btn btn-success" onClick={saveUser}>Add User</button>
                        </div>
                           )}
         </div>

     )
 }
 export default Addinput