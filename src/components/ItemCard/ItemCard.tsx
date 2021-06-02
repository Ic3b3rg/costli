
import Icon from 'react-icons-kit';
import { TransactionType } from '../Form/Form';
import { arrowDownThick } from 'react-icons-kit/typicons/arrowDownThick';
import { arrowUpThick } from 'react-icons-kit/typicons/arrowUpThick';
import { pencil } from 'react-icons-kit/typicons/pencil';
import { trash } from 'react-icons-kit/typicons/trash';



import { IconButton } from '../../shared/IconButtons/IconButton';

export interface IItemCard {
    amount: number;
    description: string;
    unit?: string;
    type: TransactionType;
    createdAt: string;
}

export const ItemCard: React.FC<IItemCard> = ({ amount, description, type, unit, createdAt }) => {

    return (
        <div className="w-full h-20 flex flex-row border border-primary bg-ultralight rounded-3xl p-4 space-x-4 shadow items-center">
            <div className="w-12 h-12 rounded-full border border-dark flex justify-center items-center text-ultralight"><Icon size={28} icon={type == TransactionType.ENTRATA ? arrowUpThick : arrowDownThick} className={type == TransactionType.ENTRATA ? "text-green-600" : "text-red-700"} /></div>
            <div className="flex flex-col justify-evenly items-start flex-1">
                <p className="text-2xl font-bold text-primary">{unit ?? "€"} {amount}</p>
                <p className="text-dark">{createdAt}</p>
            </div>
            <p className="text-dark font-medium flex-auto">{description}</p>
            <IconButton icon={pencil} onClick={() => { }} className="w-12 h-12 items-center hover:text-dark hover:border-dark" size={28} />
            <IconButton icon={trash} onClick={() => { }} className="w-12 h-12 items-center hover:text-red-700 hover:border-red-700" size={28} />
        </div>
    );

}