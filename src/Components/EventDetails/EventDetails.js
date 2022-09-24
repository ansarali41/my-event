import React, { useContext } from 'react';
import { UserContext } from '../../App';
import eventImg from '../../images/Event image.jpg';

const EventDetails = () => {
    const [user, setUser] = useContext(UserContext);

    const { eventName, hostName, startDate, endDate, location } = user;
    return (
        <div className="bg" style={{ width: '100%', height: '100vh' }}>
            <div className="container row d-flex justify-content-evenly">
                {/* img div */}
                <div className="col-md-5 col-10 ">
                    <h1>{eventName}</h1>
                    <p>
                        Hosted by <strong>{hostName}</strong>
                    </p>
                    <div className="shadow-sm p-3 mb-5 bg-white rounded">
                        <p>start date: {startDate}</p>
                        <p>end date: {endDate}</p>
                    </div>
                    <div className="shadow-sm p-3 mb-5 bg-white rounded">
                        <p>location: {location}</p>
                    </div>
                </div>
                {/* text div */}
                <div className="text-container col-md-5 col-10 d-flex align-items-center">
                    <img src={eventImg} alt="" className="img-fluid mobile-img" />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
