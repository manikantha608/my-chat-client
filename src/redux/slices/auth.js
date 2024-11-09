import {createSlice} from "@reduxjs/toolkit"
import axios from "../../utils/axios"
import { toast } from "react-toastify";
const initialState = {
   isLoading:false,
   error:null,
   token:null,
   user:{},
   isLoggedIn:false                 
};

const slice = createSlice({
    name:"auth",
    initialState,
    reducers:{
       setError(state,action){
           state.error = action.payload;         
       },
       setLoading(state,action){
           state.isLoading = action.payload;         
       },
       loginSuccess(state,action){
           state.token = action.payload,
           state.isLoggedIn = true         
       },
       logoutsuccess(state,action){
           state.token = null,
           state.isLoggedIn = false         
       }             
    }                
})

export default slice.reducer;

const {setError,setLoading,loginSuccess,logoutsuccess} = slice.actions;

//**REGISTER USER */

export function RegisterUser(formData,navigate){
   return async (dispatch ,getState)=>{
         dispatch(setError(null)) 
         dispatch(setLoading(true)) 

         const reqBody = {
             ...formData       
         }
         
         //MAKE API CALL
         await axios.post("/auth/signup",reqBody,{
              headers:{
                 "Content-Type":"application/json"   
              },      
         }).then(function(response){
             console.log(response)
             toast.success(response.data.message)
         }).catch(function(error){
             console.log(error) 
             dispatch(setError(error))
             toast.error(error?.message || "Something went wrong")      
         }).finally(()=>{
             dispatch(setLoading(false)) 
             if(!getState().auth.error){
               navigate(`/auth/verify?email=${formData.email}`)
             }      
         })

   }
}

// RESEND OTP
export function ResendOTP(email){
    return async (dispatch,getState)=>{
      dispatch(setError(null))
      dispatch(setLoading(true))

      //MAKE API CALL
      await  axios.post("/auth/resend-otp",
      {
         email                 
      },
      {
         headers:{
            "Content-Type" : "application/json"       
         }           
      }
     ).then(function(response){
        console.log(response.data)
        toast.success(response.data.message)
     }).catch(function(error){
        console.log(error) 
        dispatch(setError(error)) 
        toast.error(error?.message || "Something went wrong!")          
     }).finally(()=>{
        dispatch(setLoading(false))            
     })
    }                
}


//VERIFY OTP
export function  VerifyOTP(formValues,navigate){
    return async (dispatch,getState)=>{
      dispatch(setError(null)) 
      dispatch(setLoading(true))    
      
      await axios.post("/auth/verify",
       {
         ...formValues           
       },
       {
         headers:{
            "Content-Type":"application/json"        
         }           
       }             
      ).then(function(response){
        console.log(response.data)
        const {token,message} = response.data;
        dispatch(loginSuccess(token))

        toast.success(message || "Email verified Successfully!")
     }).catch(function(error){
        console.log(error) 
        dispatch(setError(error)) 
        toast.error(error?.message || "Something went wrong!")          
     }).finally(()=>{
        dispatch(setLoading(false))  
        if(!getState().auth.error){
           navigate("/dashboard")         
        }          
     }) 
    } 
                  
}

//LOGIN USER
export function LoginUser(formValues,navigate){
    return async (dispatch,getState)=>{
      dispatch(setError(null)) 
      dispatch(setLoading(true))    
      
      await axios.post("/auth/login",
       {
         ...formValues           
       },
       {
         headers:{
            "Content-Type":"application/json"        
         }           
       }             
      ).then(function(response){
        console.log(response.data)
        const {token,message} = response.data;
        dispatch(loginSuccess(token))

        toast.success(message || "Logged in Successfully!")
     }).catch(function(error){
        console.log(error) 
        dispatch(setError(error)) 
        toast.error(error?.message || "Something went wrong!")          
     }).finally(()=>{
        dispatch(setLoading(false))  
        if(!getState().auth.error){
           navigate("/dashboard")         
        }          
     }) 
    } 
}

export function LogoutUser(navigate){
   return async(dispatch,getState) => {
      try{
         dispatch(logoutsuccess());
         navigate("/");
         toast.success("Logged out Successfully!")
      }catch(error){
         console.log(error)
      }
   }
}