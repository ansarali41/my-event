import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './CreateEvent.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';

const CreateEvent = () => {
    const [user, setUser] = useContext(UserContext);
    let navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = eventData => {
        if (eventData) {
            setUser(eventData);
            navigate('/event');
        }
    };

    return (
        <div className="bg" style={{ height: '100%' }}>
            <div className="container text-center">
                <div className="mb-2 d-flex justify-content-start">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button className="create-btn" variant="contained">
                            Back to Home
                        </Button>
                    </Link>
                </div>
                <div className="registration-form ">
                    <h3>Create an Event</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="eventName" ref={register({ required: true })} placeholder="Event Name" className="form-control" /> <br />
                        {/*  */}
                        <input name="hostName" ref={register({ required: true })} placeholder="Host Name" className="form-control" /> <br />
                        {/*  */}
                        <input name="hostName" ref={register({ required: true })} placeholder="Host Name" className="form-control" /> <br />
                        {/*  */}
                        <p className="text-start">Start Date:</p>
                        <input name="startDate" type="date" ref={register({ required: true })} placeholder="Start Date" className="form-control" /> <br />
                        {/*  */}
                        <p className="text-start">End Date:</p>
                        <input name="endDate" type="date" ref={register({ required: true })} placeholder="End Date" className="form-control" /> <br />
                        {/*  */}
                        <input name="location" ref={register({ required: true })} placeholder="location" className="form-control" /> <br />
                        {/*  */}
                        <div className="pb-3">
                            <Button variant="contained" component="label" style={{ width: '100%' }}>
                                Upload
                                <input hidden accept="image/*" type="file" />
                            </Button>
                        </div>
                        <br />
                        {/* next button */}
                        <Button className="create-btn" variant="contained" type="submit">
                            Next
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
