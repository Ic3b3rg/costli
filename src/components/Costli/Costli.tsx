
import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { IStatisticCard, StatisticsCard } from '../StatisticCard/StatisticCard';
import { Form } from '../Form/Form';
import { IItemCard, ItemCard } from '../ItemCard/ItemCard';
import { useDeleteTransaction, useGetTransiction } from '../../requestsQL/useTransaction';
import { StatisticCardType } from '../../shared/enums/statistic-card-type.enum';

export interface ITransactionsList {
    transactions: IItemCard[];
    summary: {
        inSum: number,
        outSum: number,
        balance: number
    }
}

export const userDetailContext = React.createContext({});

export const Costli: React.FC = () => {


    //Context state
    const [currentDate, setCurrentDate] = useState<number>(new Date().getMonth());

    const { data, error, isLoading, isSuccess, refetch } = useGetTransiction(currentDate)

    const [state, setstate] = useState<ITransactionsList>(data);



    const STATISTICS_CARDS: IStatisticCard[] = [
        {
            type: StatisticCardType.IN,
            value: 0,
            label: "Entrate",
        },
        {
            type: StatisticCardType.OUT,
            value: 0,
            label: "Uscite",
        },
        {
            type: StatisticCardType.BALANCE,
            value: 0,
            label: "Bilancio",
        }
    ];

    useEffect(() => {
        setstate(data)
    }, [data])


    const getFormData = (values: any) => {
        refetch();
    };

    const getCurrentDate = (date: Date) => {
        setCurrentDate(date.getMonth());
    }

    const editTransaction = () => {
        //console.log()

    };

    const deleteTransaction = useDeleteTransaction();

    const removeTransaction = (id: string | Date | number) => {
        deleteTransaction.mutate({ id }, {
            onSuccess: () => {
                setstate({ ...state, transactions: state.transactions.filter(transaction => transaction.id !== id) });
                refetch();
            }
        });

    };

    return (
        <userDetailContext.Provider value={state}>
            <div className="flex flex-col p-8 w-full h-full space-y-8 items-center">
                <Header getCurrentDate={getCurrentDate} />
                <div className="w-4/5 flex flex-row justify-evenly items-center space-x-4">
                    {state && state.summary && STATISTICS_CARDS.map((card, index) => <StatisticsCard label={card.label} value={card.type === StatisticCardType.IN ? state.summary.inSum : card.type === StatisticCardType.OUT ? state.summary.outSum : state.summary.balance} type={card.type} key={index} />)}
                </div>
                <Form getData={getFormData} />
                <span className="w-5/6 border border-primary"></span>
                {
                    state && state.transactions && state.transactions.length > 0 ? isSuccess && state.transactions && <div className="flex flex-col space-y-4 w-4/5 p-4 overflow-y-auto">
                        {
                            state.transactions
                                .sort((a, b) => {
                                    return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
                                }).map((item, index) => <ItemCard key={index} id={item.id} amount={item.amount} description={item.description} editTransaction={editTransaction} removeTransaction={removeTransaction} type={item.type} unit={item.unit} createdAt={item.createdAt} />)
                        }
                    </div> : <p className="text-lg">Nessuna transazione da visualizzare.</p>
                }
            </div>
        </userDetailContext.Provider>
    )
}
