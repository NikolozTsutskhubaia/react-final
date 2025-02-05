import { FC } from 'react';

export const About: FC = () => (
    <div className="about">
        <div className="about-content">
            <h1>ჩვენს შესახებ</h1>
            <p>ჩვენი კომპანიის ისტორია და მიზნები</p>
            <div className="about-info">
                <div className="info-item">
                    <h3>ჩვენი მისია</h3>
                    <p>მომხმარებლისთვის საუკეთესო მომსახურების მიწოდება</p>
                </div>
                <div className="info-item">
                    <h3>კონტაქტი</h3>
                    <p>ტელ: +995 555 123 456</p>
                    <p>მისამართი: თბილისი, საქართველო</p>
                </div>
            </div>
        </div>
    </div>
);