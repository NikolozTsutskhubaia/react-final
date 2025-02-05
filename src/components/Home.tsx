import { FC } from 'react';

export const Home: FC = () => (
    <div className="home">
        <div className="hero">
            <h1>კეთილი იყოს თქვენი მობრძანება</h1>
            <p>აღმოაჩინეთ საუკეთესო პროდუქტები</p>
        </div>
        <div className="features">
            <div className="feature">
                <h2>ხარისხი</h2>
                <p>უმაღლესი ხარისხის პროდუქცია</p>
            </div>
            <div className="feature">
                <h2>ფასი</h2>
                <p>საუკეთესო ფასები ბაზარზე</p>
            </div>
        </div>
    </div>
);