interface ButtonProps{
    title:string;
    click: ()=>void
}

const Button:React.FC<ButtonProps> = ({title,click}:ButtonProps)=>{
    return  <button onClick={()=>click()}>{title}</button>
    
}

export default Button;