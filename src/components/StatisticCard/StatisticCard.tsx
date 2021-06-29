import { StatisticCardType } from '../../shared/enums/statistic-card-type.enum'
export interface IStatisticCard {
    type: StatisticCardType,
    unit?: string;
    value: number;
    label: string;
}

export const StatisticsCard: React.FC<IStatisticCard> = ({ value, label, unit }) => {

    return (
        <div className="w-1/3 h-20 flex flex-col border border-primary bg-ultralight items-center justify-evenly rounded-3xl shadow">
            <p className="text-3xl text-dark">{unit ?? '€'}{value}</p>
            <p className="text-lg font-semibold text-primary">{label}</p>
        </div>
    );

}