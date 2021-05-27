import { Icon } from 'react-icons-kit'

interface IconButtonProps {
    icon:any;
    switcher: ()=> void;
}

export const IconButton:React.FC<IconButtonProps> = ({icon, switcher})=>{
    return(
      <button onClick={switcher} className="rounded-full w-8 h-8 flex justify-center border">
          <Icon icon={icon} />
      </button> 

    )
}
