import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Main from './components/Main';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </div>
    );
}