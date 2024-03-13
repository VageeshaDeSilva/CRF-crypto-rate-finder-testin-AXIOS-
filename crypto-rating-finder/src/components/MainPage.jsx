import axios from "axios";
import React, { useState } from "react";
import CryptoFetch from "./CryptoFetch";
import './MainPage.css'

function MainPage() {

    const [coin, setCoin] = useState('bitcoin');


    return (
        <div className="mainCard">
            <div className="toggleBtn">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Find Crypto
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button type="button" className="dropdown-item" onClick={() => { setCoin('bitcoin') }}>
                                BitCoin
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item" onClick={() => { setCoin('ethereum') }}>
                                Ethereum
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item" onClick={() => { setCoin('tether') }} >
                                Tether
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item" onClick={() => { setCoin('binance-coin') }} >
                                Binance-coin
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item" onClick={() => { setCoin('solana') }} >
                                Solana
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item" onClick={() => { setCoin('xrp') }} >
                                xrp
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
            <CryptoFetch selectedCoin={coin} />
        </div>
    );
}

export default MainPage;
