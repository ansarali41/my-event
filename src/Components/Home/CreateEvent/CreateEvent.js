import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './CreateEvent.css';

const CreateEvent = () => {
    // registration form handler
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = eventData => {
        console.log(eventData);
    };

    return (
        <div className="container text-center mt-5">
            <div className="mb-2">
                <Link to="/home">Home</Link>
            </div>
            <div className="registration-form ">
                <h3>Create Event</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="fullName" defaultValue="name" ref={register({ required: true })} placeholder="Full Name" /> <br />
                    {errors.fullName && <span style={{ color: 'red' }}>Full Name is required</span>} <br />
                    <input name="email" defaultValue="email" ref={register({ required: true })} placeholder="Email or Username" /> <br />
                    {errors.email && <span style={{ color: 'red' }}>Email or user name is required</span>} <br />
                    <input name="date" type="date" ref={register({ required: true })} placeholder="Date" /> <br />
                    {errors.date && <span style={{ color: 'red' }}>Date is required</span>} <br />
                    <input name="description" ref={register({ required: true })} placeholder="Description" /> <br />
                    {errors.description && <span style={{ color: 'red' }}>Description is required</span>} <br />
                    <input name="volunteeringName" defaultValue="vol name" ref={register({ required: true })} placeholder="volunteering name" /> <br />
                    {errors.volunteeringName && <span style={{ color: 'red' }}>Volunteer name is required</span>} <br />
                    {/* <input name="fullName" defaultValue="name" ref={register({ required: true })} placeholder="Full Name" /> <br />
                    {errors.fullName && <span style={{ color: 'red' }}>Full Name is required</span>} <br />
                    <input name="email" defaultValue="email" ref={register({ required: true })} placeholder="Email or Username" /> <br />
                    {errors.email && <span style={{ color: 'red' }}>Email or user name is required</span>} <br />
                    <input name="date" type="date" ref={register({ required: true })} placeholder="Date" /> <br />
                    {errors.date && <span style={{ color: 'red' }}>Date is required</span>} <br />
                    <input name="description" ref={register({ required: true })} placeholder="Description" /> <br />
                    {errors.description && <span style={{ color: 'red' }}>Description is required</span>} <br />
                    <input name="volunteeringName" defaultValue="vol name" ref={register({ required: true })} placeholder="volunteering name" /> <br />
                    {errors.volunteeringName && <span style={{ color: 'red' }}>Volunteer name is required</span>} <br /> */}
                    {/* <Link to="/registrationList"> */}
                    <input className="bg-primary text-white" type="submit" value="Registration" />
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
