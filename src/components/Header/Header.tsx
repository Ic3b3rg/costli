import { DatePicker } from '../DatePicker/DatePicker'

export interface IHeader {
    getCurrentDate: (date: any) => void
}

export const Header: React.FC<IHeader> = ({ getCurrentDate }) => {

    const user = sessionStorage.getItem('user');

    return (
        <div className="w-full h-20 flex flex-row p-4 justify-between items-center">
            <h1 className="font-bold text-4xl text-dark">Costli</h1>
            <div className="flex flex-col">
                {user && <p className="text-center font-medium">Logged as: <span className="font-normal">{user}</span></p>}
                <DatePicker getCurrentDate={getCurrentDate} />
            </div>
        </div>
    )
}
