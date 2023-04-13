import React,{useState} from "react";
import farmContext from "./ycontext";

const FarmState = (props)=>{
    const [Login, setLogin] = useState(false);
    return(
        <farmContext.Provider value={{Login,setLogin}}>
            {props.children}
        </farmContext.Provider>
    )
}

export default FarmState;