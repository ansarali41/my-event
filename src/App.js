import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEvent from './Components/Home/CreateEvent/CreateEvent';
import EventDetails from './Components/EventDetails/EventDetails';
import { createContext, useState } from 'react';
export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({ eventName: '', hostName: '', startDate: '', endDate: '', location: '', photo: '' });
    return (
        <div>
            <UserContext.Provider className="container" value={[user, setUser]}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/create" element={<CreateEvent />} />
                        <Route path="/event" element={<EventDetails />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
}

export default App;
