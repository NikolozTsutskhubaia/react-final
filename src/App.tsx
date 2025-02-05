import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { About } from './components/About';
import { useTheme } from './hooks/useTheme';
import './styles/index.scss';

const App: FC = () => {
    const [theme] = useTheme();

    return (
        <Router>
            <div data-theme={theme}>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;