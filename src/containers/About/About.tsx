import React from 'react'
import appIcon from "../../assets/crypto.png";
import tailwindcssPicture from "../../assets/tailwindcss.png";
import chartjsPicture from "../../assets/chartjs.png";

interface IAboutProps { }

const About: React.FC<IAboutProps> = () => {
    return (
        <div className='m-auto text-lg'>
            <img src={appIcon} alt="App Icon" className='m-auto' />
            <h2 className='text-center my-3 font-bold text-2xl'>Crypto Coins</h2>

            <div className='mt-40'>
                <p className='indent-10'>Crypto Coins is a digital platform that provides information about crypto coins. I attempted to display the relevant crypto coins and their descriptions here. Well, I would also like to share with you the tech stack of the app and a short description of almost every UI component that I used on that stack.</p>
                <p className='my-5 '>General app stack:</p>
                <ul className='list-disc'>
                    <li className='indent-3'>React</li>
                    <li className='indent-3'>TypeScript</li>
                    <li className='indent-3'>Redux-toolkit</li>
                    <li className='indent-3'>Thunk</li>
                    <li className='indent-3'>React-router</li>
                    <li className='indent-3'>Tailwindcss</li>
                    <li className='indent-3'>ChartJs</li>
                    <li className='indent-3'>CoinCap.io API</li>
                </ul>
            </div>

            <div className='my-10 flex items-center justify-between gap-10'>
                <p className='indent-10 w-[60%]'>
                    <a href="https://tailwindcss.com/" className="text-primary-200 transition-colors hover:text-primary-300" aria-label='tailwindcss'>Tailwindcss</a> is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.
                </p>
                <div className='w-[40%]'>
                    <img src={tailwindcssPicture} alt="Tailwindcss" className='object-cover h-full w-full' />
                </div>
            </div>

            <div className='my-10 flex flex-row-reverse items-center justify-between gap-10'>
                <p className='indent-10 w-[60%]'>
                    <a href="https://www.chartjs.org/" className="text-primary-200 transition-colors hover:text-primary-300" aria-label='Chart.js'>Chart.js</a> is a free, open-source JavaScript library for data visualization, which supports eight chart types: bar, line, area, pie (doughnut), bubble, radar, polar, and scatter.
                </p>
                <div className='w-[40%]'>
                    <img src={chartjsPicture} alt="Chart.js presentation icon" className='object-cover h-full w-full' />
                </div>
            </div>

            <div>
                <p>
                    These two technologies are new for my dev expirience....
                </p>
            </div>

        </div>
    )
}

export default About