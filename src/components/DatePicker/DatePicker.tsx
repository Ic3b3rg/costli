import { useContext, useState } from "react"
import { IconButton } from "../../shared/IconButtons/IconButton";
import { plus } from 'react-icons-kit/typicons/plus';
import { minus } from 'react-icons-kit/typicons/minus';
import { userDetailContext } from "../Costli/Costli";
import { Months } from '../../shared/enums/months.enum';

export const DatePicker: React.FC = () => {

    const [DateTime, setDateTime] = useState<Date>(new Date());

    const context = useContext(userDetailContext)



    const switchMonth = (operator: number) => {
        DateTime.setMonth(DateTime.getMonth() + operator)
        console.log('switchMonth')
        setDateTime(new Date(DateTime))
    }

    const numberToMonth = (monthNumber: number) => {
        switch (monthNumber) {
            case 0:
                return Months.GENNAIO;
            case 1:
                return Months.FEBBRAIO;
            case 2:
                return Months.MARZO;
            case 3:
                return Months.APRILE;
            case 4:
                return Months.MAGGIO;
            case 5:
                return Months.GIUGNO;
            case 6:
                return Months.LUGLIO;
            case 7:
                return Months.AGOSTO;
            case 8:
                return Months.SETTEMBRE;
            case 9:
                return Months.OTTOBRE;
            case 10:
                return Months.NOVEMBRE;
            case 11:
                return Months.DICEMBRE;
        }
    }

    return (
        <div className="flex-row flex justify-center p-4 space-x-4">
            <IconButton icon={minus} onClick={() => switchMonth(-1)} />
            <p className="font-semibold text-primary text-xl">{numberToMonth(DateTime.getMonth())} {DateTime.getFullYear()}</p>
            <IconButton icon={plus} onClick={() => switchMonth(1)} />
        </div>
    )
}

