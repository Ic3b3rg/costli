import {DatePicker} from '../DatePicker/DatePicker'
export const Header:React.FC = ()=>{


    return(
        <div className="flex flex-row p-4 w-full justify-between">
            <h1 className="font-bold text-2xl ">Header</h1>
            <DatePicker/>
        </div>
    )
}
