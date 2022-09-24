import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEvent from './Components/Home/CreateEvent/CreateEvent';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/create" element={<CreateEvent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
