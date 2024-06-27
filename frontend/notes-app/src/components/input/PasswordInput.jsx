import React,{useState} from 'react'
import {FaRegEye,FaRegEyeSlash} from "react-icons/fa6"

 const PasswordInput=({value,onChange,placeholder}) =>{
    const [isShowPassword,setIsShowPassword]=useState(false);

    const toggleShowPassword=()=>{
        setIsShowPassword(!isShowPassword);
    }
    return(
        <div >
             <input
             value={value}
             onChange={onChange}
             type={isShowPassword ? "text" : "password"}

             placeholder={placeholder || "Password"}
             className="input-box"
             />
          
        </div>
    )
}

export default PasswordInput