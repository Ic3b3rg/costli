function Button({title,click}:any){
    return  <button onClick={()=>click()}>{title}</button>
    
}

export default Button;