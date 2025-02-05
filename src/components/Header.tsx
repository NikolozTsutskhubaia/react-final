import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import {FC} from "react";

export const Header: FC = () => {
  const [theme, setTheme] = useTheme();

  return (
      <header className="header">
        <nav>
          <div className="nav-links">
            <Link to="/">მთავარი</Link>
            <Link to="/products">პროდუქტები</Link>
            <Link to="/about">ჩვენს შესახებ</Link>
          </div>
          <button
              className="theme-toggle"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>
  );
};