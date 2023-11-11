import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const apiContext = createContext()
function Api(props) {
    // const API_URL = 'https://rpu.unsam.ac.id/api';
    const API_URL = 'xace626b.ala.us-east-1.emqxsl.com';
    const token = localStorage.getItem("token");
    axios.defaults.baseURL = API_URL;
    axios.defaults.headers.common = { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
    return (
        <apiContext.Provider
            value={{
                axios, API_URL
            }}>
            {props.children}
        </apiContext.Provider>
    )
}
export default Api;