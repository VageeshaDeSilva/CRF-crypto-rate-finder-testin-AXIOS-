import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDollors } from './format';
import { formatPercentage } from './format';
import './CryptoFetch.css'

function CryptoFetch(props) {
    const [value, setValue] = useState({});

    const url = `https://api.coincap.io/v2/assets/${props.selectedCoin}`;

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setValue(res.data);
                console.log(res.data);
            })
    }, [props.selectedCoin]);

    const refresh = () => {
        axios
            .get(url)
            .then((res) => {
                setValue(res.data);
                console.log(res.data);
            })
    }

    return (value.data != null) ? (
        <>
            <div>
                <table>
                    <tr>
                        <td><h4>Name</h4></td>
                        <td className='td'><h4>: {value.data.name}</h4></td>
                    </tr>
                    <tr>
                        <td><h4>Price</h4></td>
                        <td className='td'><h4>: {formatDollors(value.data.priceUsd)}</h4></td>
                    </tr>
                    <tr>
                        <td><h4>Changing Percent</h4></td>
                        <td className='td'><h4>: {formatPercentage(value.data.changePercent24Hr)}%</h4></td>
                    </tr>
                    <tr>
                        <td><h4>Rank</h4></td>
                        <td className='td'><h4>: {value.data.rank}</h4></td>
                    </tr>
                    <tr>
                        <td><h4>Symbol</h4></td>
                        <td className='td'><h4>: {value.data.symbol}</h4></td>
                    </tr>
                </table>
            </div>
            <div>
                <button className='btn btn-success refreshBtn' onClick={refresh}>Refresh</button>
            </div>
        </>
    ) : (
        <>
            <h1>Finding...</h1>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div>
                <button className='btn btn-success ' onClick={refresh}>Refresh</button>
            </div>
        </>
    );
}

export default CryptoFetch