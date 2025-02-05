import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { Theme } from '../types';

export const useTheme = (): [Theme, (theme: Theme) => void] => {
    const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, setTheme];
};