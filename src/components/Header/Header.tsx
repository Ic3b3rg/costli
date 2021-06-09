import { DatePicker } from '../DatePicker/DatePicker'

export interface IHeader {
    getCurrentDate: (date: any) => void
}

export const Header: React.FC<IHeader> = ({ getCurrentDate }) => {


    return (
        <div className="w-full h-20 flex flex-row p-4 justify-between items-center">
            <h1 className="font-bold text-4xl text-dark">Costli</h1>
            <DatePicker getCurrentDate={getCurrentDate} />
        </div>
    )
}
