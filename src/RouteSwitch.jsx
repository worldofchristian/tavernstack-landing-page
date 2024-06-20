import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Data from './pages/Data';

const RouteSwitch = () => {
        return (
            <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/data" element={<Data />} />
                </Routes>
            </BrowserRouter>
            </>
        );
    };
        export default RouteSwitch;

