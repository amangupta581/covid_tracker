import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);


    const getcoviddata = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);


        } catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {
        getcoviddata();
    }, []);
    return (
        <>
            <section>
                <h1> live </h1>
                <h1> Covid-19 Tracker </h1>

                <ul>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card_inner'>
                                <p className='card_name'><span> OUR </span> COUNTRY</p>
                                <p className='card_total card_small'> INDIA </p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card_inner'>
                                <p className='card_name'><span> Cases </span> RECOVERED </p>
                                <p className='card_total card_small'> {data.recovered} </p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card_inner'>
                                <p className='card_name'><span> Cases </span> CONFIRMED </p>
                                <p className='card_total card_small'> {data.confirmed} </p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card_inner'>
                                <p className='card_name'><span> Total </span> COUNTRY</p>
                                <p className='card_total card_small'> {data.deaths} </p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card_inner'>
                                <p className='card_name'><span> Total </span> ACTIVE </p>
                                <p className='card_total card_small'> {data.active} </p>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='card_main'>
                            <div className='card_inner'>
                                <p className='card_name'><span> Last </span> Update </p>
                                <p className='card_total card_small'> {data.lastupdatedtime} </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>

    )
}

export default Covid 