import {useEffect,useState} from "react"

//use of this hook
//pass a key and initial value ex : lets say theme mode we set the initial value to light so inside our local storage will have a key value pair the key will be color mode and it will be set to light so we can basically update this color mode later on to dark and the theme will switch to dark . It returns current value that is stored in our local storage and a way to update that value that means a function 

function useLocalStorage(key,initialValue){
   const [storedValue,setStoredValue] = useState(()=>{
        try{
        // get value from local storage using key
        const item = window.localStorage.getItem(key)

        return item ? JSON.parse(item):initialValue;
        }catch(error){
          console.log(error)
          return initialValue;
        }
                    
   }) ;
   useEffect(()=>{
     try{
       const  valueToStore = typeof storedValue === "function" ? storedValue(storedValue) : storedValue;

       window.localStorage.setItem(key,JSON.stringify(valueToStore));
     }catch(error){
        console.log(error)            
     }
   },[key,storedValue]);
   
   return [storedValue,setStoredValue];
}

export default useLocalStorage;