
import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { IStatisticCard, StatisticsCard } from '../StatisticCard/StatisticCard';
import { Form } from '../Form/Form';
import { IItemCard, ItemCard } from '../ItemCard/ItemCard';
import { useDeleteTransaction, useGetTransiction } from '../../requestsQL/useTransaction';

export const userDetailContext = React.createContext([{}])

export const Costli: React.FC = () => {


    //Context state
    const [currentDate, setCurrentDate] = useState<number>(new Date().getMonth());

    const { data, error, isLoading, isSuccess } = useGetTransiction(currentDate)

    const [state, setstate] = useState<IItemCard[]>(data);



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


    const getFormData = (values: any) => {
        console.log(values)
    };

    const getCurrentDate = (date: Date) => {
        setCurrentDate(date.getMonth());
        console.log(date);
    }

    const consolla = () => {
        console.log(data, error, isLoading, isSuccess)
    };

    const editTransaction = () => {
        console.log()

    };

    const deleteTransaction = useDeleteTransaction();

    const removeTransaction = (id: string | Date | number) => {
        deleteTransaction.mutate({ id }, {
            onSuccess: () => {
                setstate(state.filter(transaction => transaction.id !== id));
            }
        });

    };


    return (
        <userDetailContext.Provider value={state}>
            <div className="flex flex-col p-8 w-full h-full space-y-8 items-center">
                <Header getCurrentDate={getCurrentDate} />
                <div className="w-4/5 flex flex-row justify-evenly items-center space-x-4">
                    {STATISTICS_CARDS.map((card, index) => <StatisticsCard label={card.label} value={card.value} key={index} />)}
                </div>
                <Form getData={getFormData} />
                <span className="w-5/6 border border-primary"></span>
                {
                    isSuccess && state && <div className="flex flex-col space-y-4 w-4/5 p-4 overflow-y-auto">
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
