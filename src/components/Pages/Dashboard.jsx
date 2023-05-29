import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [isLight, setIsLight] = useState(false);

    return(
        <>
            <Header lightStyles={isLight}/>
            
            <main>
                <Outlet context={[isLight, setIsLight]}/>
            </main>

            <Footer/>
        </>
    )
}

export default Dashboard;