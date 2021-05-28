import { useFormik, validateYupSchema } from 'formik';
import { useState } from 'react';
import './Form.css';
import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/typicons/plus';

export enum TransactionType {
    "ENTRATA" = 0,
    "USCITA" = 1
}

export const Form: React.FC<{ getData: any }> = ({ getData }) => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            value: '',
            description: '',
            type: Boolean(TransactionType.ENTRATA)
        },
        onSubmit: values => {
            getData(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-row w-4/5 space-x-4">
            <input id="value" type="text" placeholder="Importo" className="w-1/3 border border-dark rounded-2xl p-2 text-dark font-semibold" value={formik.values.value} onChange={formik.handleChange} />
            <input id="description" type="text" placeholder="Descrizione" className="w-1/3 border border-dark rounded-2xl p-2 text-dark font-semibold" value={formik.values.description} onChange={formik.handleChange} />
            <div className="w-1/3 flex flex-row">
                <div className="flex items-center justify-center w-2/3">

                    <label className="flex items-center cursor-pointer space-x-2">
                        <div className=" text-green-600 font-semibold">
                            Entrata
                    </div>
                        <div className="relative">
                            <input type="checkbox" id="type" className="sr-only" checked={formik.values.type} onChange={formik.handleChange} />
                            <div className="block bg-ultralight w-14 h-8 rounded-full border border-dark"></div>
                            <div className="dot absolute left-1 top-1 bg-green-600 w-6 h-6 rounded-full transition "></div>
                        </div>
                        <div className="text-red-700 font-semibold">
                            Uscita
                    </div>
                    </label>

                </div>
                <button type="submit" className="w-1/3 bg-primary rounded-2xl font-semibold p-2 text-white">Aggiungi <Icon icon={plus} /></button>
            </div>
        </form>
    );
};