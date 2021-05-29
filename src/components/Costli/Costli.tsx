
import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { IStatisticCard, StatisticsCard } from '../StatisticCard/StatisticCard';
import { Form, TransactionType } from '../Form/Form';
import { IItemCard, ItemCard } from '../ItemCard/ItemCard';

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

    const ITEMS: IItemCard[] = [
        {
            value: 1512,
            description: "Stipendio Aprile 2021 - Lending Solution Srl",
            type: TransactionType.ENTRATA,
            transactionDate: "10/05/2021 - 07:48"
        },
        {
            value: 35.90,
            description: "Abbonamento Metro Roma",
            type: TransactionType.USCITA,
            transactionDate: "13/05/2021 - 09:21"
        },
        {
            value: 50,
            description: "Regalo di Nonna",
            type: TransactionType.ENTRATA,
            transactionDate: "22/05/2021 - 15:30"
        },
        {
            value: 8.50,
            description: "Pranzo - La bottega del gusto",
            type: TransactionType.USCITA,
            transactionDate: "23/05/2021 - 13:00"
        },
        {
            value: 23.79,
            description: "Amazon - Zaino per portatile 15.9 pollici",
            type: TransactionType.USCITA,
            transactionDate: "26/05/2021 - 21:10"
        },
        {
            value: 23.79,
            description: "Amazon - Zaino per portatile 15.9 pollici",
            type: TransactionType.USCITA,
            transactionDate: "26/05/2021 - 21:10"
        },
        {
            value: 23.79,
            description: "Amazon - Zaino per portatile 15.9 pollici",
            type: TransactionType.USCITA,
            transactionDate: "26/05/2021 - 21:10"
        },
    ];

    const getFormData = (values: any) => {
        console.log(values)
    };

    return (
        <userDetailContext.Provider value={state}>
            <div className="flex flex-col p-8 w-full h-full space-y-8 items-center">
                <Header />

                <div className="w-4/5 flex flex-row justify-evenly items-center space-x-4">
                    {STATISTICS_CARDS.map((card, index) => <StatisticsCard label={card.label} value={card.value} key={index} />)}
                </div>

                <Form getData={getFormData} />

                <span className="w-5/6 border border-primary"></span>

                <div className="flex flex-col space-y-4 w-4/5 p-4 overflow-y-auto">
                    {
                        ITEMS.map(item => <ItemCard value={item.value} description={item.description} type={item.type} unit={item.unit} transactionDate={item.transactionDate} />)
                    }
                </div>


            </div>
        </userDetailContext.Provider>
    )
}
