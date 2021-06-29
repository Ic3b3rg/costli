import React, { createContext, useContext, useState } from "react";
import {
    useHistory,
    useLocation
} from "react-router-dom";

import { useFormik } from "formik";

import { authContext } from '../Auth/ProvideAuth/ProvideAuth';
import { useLogin } from '../../requestsQL/useLogin'
import { Mutation } from "react-query/types/core/mutation";
import { UseMutationResult } from "react-query/types/react/types";


export const Login: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const auth: any = useAuth();
    const loginMutation = useLogin()

    const { from }: any = location.state || { from: { pathname: "/costli" } };
    const login = () => {
        auth.signin(() => {
            history.replace(from);
            console.log(from)
        });
    };
    const formik = useFormik({
        initialValues: {
            email: 's.ceccarini94@gmail.com',
            password: 'Password123'
        },

        onSubmit: ({ email, password }) => {
            doLogin(email, password);
        }
    });


    const doLogin = (email, password) => {
        loginMutation.mutate({ email, password })
    };



    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="max-w-lg w-full bg-ultralight shadow-2xl rounded-lg mx-auto text-center py-12">
                <h1 className="text-primary text-center font-extrabold -mt-3 text-3xl">Costli</h1>
                <div className="container py-5 max-w-md mx-auto">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <input placeholder="Email"
                                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="text" required value={formik.values.email} onChange={formik.handleChange} />
                        </div>
                        <div className="mb-6">

                            <input placeholder="Password"
                                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" required value={formik.values.password} onChange={formik.handleChange} />

                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-primary hover:bg-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={formik.isValid ? login : null}
                                disabled={!(formik.isValid)}>
                                {/* aggiungi controllo --> && formik.dirty */}

                                Sign In
                            </button>
                            {/* <a className="inline-block align-baseline font-bold text-sm text-gray-400" href="#">
                                Forgot Password?
                            </a> */}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );

}

function useAuth() {
    return useContext(authContext);
}
