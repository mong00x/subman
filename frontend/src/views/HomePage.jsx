import Nav from '../components/Nav'
import TotalSubs from '../components/TotalSubs'
import Sub from "../components/Sub"
import AddButton from "../components/AddButton"
import RecentSubs from '../components/RecentSubs'

import React, { useEffect, useState } from 'react'
import axios from 'axios';

/* TEMPORARY, FOR TESTING PURPOSES */

import {ReactComponent as PlusIcon} from '../icons/plus.svg'



const HomePage = (props) => {
    const [subsDatas, setSubscriptionDatas] = useState([]);

    useEffect(() => {
        getSubscriptions();
    }, []);
    
    const getSubscriptions = async () => {
        const response = await axios.get("/subscription/");
        // console.log(response.data, 'getSubscriptions')
        setSubscriptionDatas([...response.data])
    };
    console.log(...subsDatas)
    // console.log(subsDatas)

    
    return (
        <div className="container">
            Home Page
            <Nav />
            <TotalSubs />
            <div className=" flex row overflow-x">
                <AddButton buttonIcon = {<PlusIcon className="button-icon"/>}
                buttonMessage = "Add Subscription"/>
                <RecentSubs />
                <RecentSubs />
                <RecentSubs />
            </div>
                
            <div style={{margin:"10px 0"}}>
                <b>Up comming payments(days)</b>
            {subsDatas.map((Data) => <Sub 
                key={Data.id}
                icon={Data.subscription_logo_path}
                name={Data.subscription_name}
                price={Data.subscription_cost} 
                period={Data.subscription_frequency}
                start={Data.subscription_start}
            />)}
                

                

            {/* <Sub 
                    subIcon={<YoutubeLogo className="sub-icon"/>}
                    subName="Youtube Premium"
                    subPrice="$99.99"
                    subTimePeriod="month"
                    subTimeLeftIcon={<Chart className=""/>}
                /> */}


                {/* <Sub 
                    subIcon={<YoutubeLogo className="sub-icon"/>}
                    subName="Netflix"
                    subPrice="$32.50"
                    subTimePeriod="week"
                    subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
                />
                <Sub 
                    subIcon={<YoutubeLogo className="sub-icon"/>}
                    subName="Figma"
                    subPrice="$100"
                    subTimePeriod="year"
                    subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
                />
                <Sub 
                    subIcon={<YoutubeLogo className="sub-icon"/>}
                    subName="Monash University"
                    subPrice="$10000"
                    subTimePeriod="year"
                    subTimeLeftIcon={<PieChart className="sub-time-left-icon"/>}
                /> */}
            </div>
            
        </div>
    )

}

export default HomePage
