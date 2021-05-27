import { useState } from "react"
import {IconButton} from "../../shared/IconButtons/IconButton";
import { plus } from 'react-icons-kit/typicons/plus';
import { minus } from 'react-icons-kit/typicons/minus';

export const DatePicker:React.FC = ()=>{
    const [DateTime, setDateTime] = useState<Date>(new Date);

    const switchMonth = (operator:number)=>{
        DateTime.setMonth(DateTime.getMonth() + operator)
        console.log('switchMonth')
        setDateTime(new Date(DateTime))
    }

    return(
        <div className="flex-row flex justify-center p-4 ">
            <IconButton icon={minus} switcher={()=>switchMonth(-1)}/>
            {DateTime.getMonth()+1}, {DateTime.getFullYear()}
            <IconButton icon={plus} switcher={()=>switchMonth(1)} />
        </div>
    )
}

