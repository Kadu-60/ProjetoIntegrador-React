import React, { InputHTMLAttributes, useCallback }  from "react";
import { cep, currency } from './maks'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    mask: "cep" | "currency";
    prefix?: string;
}


const Input: React.FC<InputProps> = ({ mask, prefix, ...props}) => {
    const handleKeyUp = useCallback((e : React.FormEvent<HTMLInputElement>) => {
    if(mask === 'cep'){
        cep(e);

    }
    if(mask === 'currency'){
        currency(e);

    } 
        
          
           
        },[]);


    return (
        <div>
            {prefix && <span> {prefix}</span>}
                 <input {...props} onKeyUp={handleKeyUp}/>
        </div>
      
    )
}

export default Input;