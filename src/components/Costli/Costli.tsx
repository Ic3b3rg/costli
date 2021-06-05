
import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { IStatisticCard, StatisticsCard } from '../StatisticCard/StatisticCard';
import { Form } from '../Form/Form';
import { IItemCard, ItemCard } from '../ItemCard/ItemCard';
import { useAddTransaction, useGetTransiction } from '../../requestsQL/useTransaction';

export const userDetailContext = React.createContext([{}])

export const Costli: React.FC = () => {


    const { data, error, isLoading, isSuccess } = useGetTransiction()

    //Context state
    const [state, setstate] = useState<IItemCard[]>(data)



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

    useEffect(() => {
        setstate(data)
    }, [data])
    // const ITEMS: IItemCard[] = [
    //     {
    //         value: 1512,
    //         description: "Stipendio Aprile 2021 - Lending Solution Srl",
    //         type: TransactionType.ENTRATA,
    //         transactionDate: "10/05/2021 - 07:48"
    //     },
    //     {
    //         value: 35.90,
    //         description: "Abbonamento Metro Roma",
    //         type: TransactionType.USCITA,
    //         transactionDate: "13/05/2021 - 09:21"
    //     },
    //     {
    //         value: 50,
    //         description: "Regalo di Nonna",
    //         type: TransactionType.ENTRATA,
    //         transactionDate: "22/05/2021 - 15:30"
    //     },
    //     {
    //         value: 8.50,
    //         description: "Pranzo - La bottega del gusto",
    //         type: TransactionType.USCITA,
    //         transactionDate: "23/05/2021 - 13:00"
    //     },
    //     {
    //         value: 23.79,
    //         description: "Amazon - Zaino per portatile 15.9 pollici",
    //         type: TransactionType.USCITA,
    //         transactionDate: "26/05/2021 - 21:10"
    //     },
    //     {
    //         value: 23.79,
    //         description: "Amazon - Zaino per portatile 15.9 pollici",
    //         type: TransactionType.USCITA,
    //         transactionDate: "26/05/2021 - 21:10"
    //     },
    //     {
    //         value: 23.79,
    //         description: "Amazon - Zaino per portatile 15.9 pollici",
    //         type: TransactionType.USCITA,
    //         transactionDate: "26/05/2021 - 21:10"
    //     },
    // ];

    const getFormData = (values: any) => {
        console.log(values)
    };

    const consolla = () => {
        console.log(data, error, isLoading, isSuccess)
    };

    const editTransaction = () => {
        console.log()

    };
    const removeTransaction = (id:string|Date|number) => {
        console.log(id)

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
                {
                    state.length > 0 && <div className="flex flex-col space-y-4 w-4/5 p-4 overflow-y-auto">
                        {
                            state
                                .sort((a, b) => {
                                    return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
                                }).map((item, index) => <ItemCard key={index} id={item.id} amount={item.amount} description={item.description} editTransaction={editTransaction} removeTransaction={removeTransaction} type={item.type} unit={item.unit} createdAt={item.createdAt} />)
                        }
                    </div>
                }
            </div>
        </userDetailContext.Provider>
    )
}
