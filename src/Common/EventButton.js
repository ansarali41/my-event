import React from 'react';
import { Button } from '@mui/material';
import './Common.css';
import { Link } from 'react-router-dom';
const EventButton = () => {
    const partyIcon = '🎉';
    return (
        <Link to="/create" style={{ textDecoration: 'none' }}>
            <Button variant="contained" startIcon={partyIcon} className="create-btn">
                Create my event
            </Button>
        </Link>
    );
};

export default EventButton;
