import { DatePicker } from '../DatePicker/DatePicker'
export const Header: React.FC = () => {


    return (
        <div className="w-full h-20 flex flex-row p-4 justify-between items-center">
            <h1 className="font-bold text-4xl text-dark">Costli</h1>
            <DatePicker />
        </div>
    )
}
