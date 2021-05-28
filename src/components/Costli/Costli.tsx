
import React, { useState } from 'react';
import { Header } from '../Header/Header';

export const userDetailContext = React.createContext('')

export const Costli: React.FC = () => {
    const [state, setstate] = useState('initialState')

    return (
        <userDetailContext.Provider value={state}>
            <div className="flex flex-column p-8 w-full h-full">
                <Header />

            </div>
        </userDetailContext.Provider>
    )
}
