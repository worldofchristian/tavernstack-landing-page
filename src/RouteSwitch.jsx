import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const RouteSwitch = () => {
        return (
            <>
            <BrowserRouter>
                <Routes>
                    {/* main routes */}
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
            </>
        );
    };
        export default RouteSwitch;

