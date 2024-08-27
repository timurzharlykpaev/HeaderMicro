import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Header from './Header';
import { NavigateFunction } from 'react-router-dom';
interface AppProps {
    navigate: NavigateFunction;
}

const App: React.FC<AppProps> = ({ navigate }) => {
    return <Header navigate={navigate} />;
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    const ParentComponent: React.FC = () => {
        const navigate = useNavigate(); // Получаем функцию navigate из useNavigate

        return <App navigate={navigate} />;
    };

    root.render(
        <Router>
            <ParentComponent />
        </Router>
    );
}
