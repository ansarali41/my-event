import React from 'react';
import EventButton from '../../Common/EventButton';
import EventText from '../../Common/EventText';
import mobileImg from '../../images/first.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';

import './Home.css';

const Home = () => {
    const mdUpMatches = useMediaQuery('(min-width:768px)');
    return (
        <div className="bg">
            <div className="main-container row d-flex justify-content-evenly">
                {/* img div */}
                <div className="col-md-5 col-10 text-center">
                    {!mdUpMatches && <EventText />}
                    <img src={mobileImg} alt="" className="img-fluid mobile-img" />
                </div>
                {/* text div */}
                <div className="text-container col-md-5 col-10 d-flex align-items-center">
                    <div style={{ width: '100%' }}>
                        {mdUpMatches && <EventText />}

                        <EventButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
