
import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { IStatisticCard, StatisticsCard } from '../StatisticCard/StatisticCard';
import { Form } from '../Form/Form';

export const userDetailContext = React.createContext('')

export const Costli: React.FC = () => {
    const [state, setstate] = useState('initialState')

    const STATISTICS_CARDS: IStatisticCard[] = [
        {
            value: 0,
            label: "Entrate",
        },
        {
            value: 0,
            label: "Uscite",
        },
        {
            value: 0,
            label: "Bilancio",
        }
    ];

    const getFormData = (values: any) => {
        console.log(values)
    };

    return (
        <userDetailContext.Provider value={state}>
            <div className="flex flex-col p-8 w-full h-full space-y-4 items-center">
                <Header />

                <div className="w-4/5 flex flex-row justify-evenly items-center space-x-4">
                    {STATISTICS_CARDS.map((card, index) => <StatisticsCard label={card.label} value={card.value} key={index} />)}
                </div>

                <Form getData={getFormData} />
            </div>
        </userDetailContext.Provider>
    )
}
