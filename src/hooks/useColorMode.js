import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

//This custom hook is basically use to set the color theme light or dark depending whenever this color mode changes 


const useColorMode = () =>{
    const [colorMode,setColorMode] = useLocalStorage("color-theme","light")  
    
    useEffect(()=>{
      const className = "dark";
//we get the classList from the body and then we check if the current mode is dark then we add this class name dark over it and if it not that means if the color mode is light then we remove that dark class from it and returning array which contains the current color mode that means this color theme and also way to update that color theme
      const bodyClass = window.document.body.classList;

      colorMode === "dark"? bodyClass.add(className): bodyClass.remove(className);
    },[colorMode])

    return [colorMode,setColorMode]
}

export default useColorMode;