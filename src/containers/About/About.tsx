import React from 'react'
import appIcon from "../../assets/crypto.png";
import tailwindcssPicture from "../../assets/tailwindcss.svg";
import chartjsPicture from "../../assets/chartjs.svg";
import typeScriptPicture from "../../assets/Typescript.svg";
import reactPicture from "../../assets/React.svg";
import reduxPicture from "../../assets/ReduxTooltik.svg";
import { ITechnologyInfo } from '../../types/common';
import TechnologyInfo from '../../components/TechnologyInfo/TechnologyInfo';

const elements: ITechnologyInfo[] = [
    {
        image: tailwindcssPicture,
        title: "Tailwindcss",
        describe: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file",
        link: "https://tailwindcss.com/",
    },
    {
        image: chartjsPicture,
        title: "Chart.js",
        describe: "Chart.js is a free, open-source JavaScript library for data visualization, which supports eight chart types. Chart.js renders in HTML5 canvas and is widely covered as one of the best data visualization libraries. It is available under the MIT license",
        link: "https://www.chartjs.org/",
    },
    {
        image: reactPicture,
        title: "React",
        describe: "React (React.js/ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. React can be used to develop single-page, mobile, or server-rendered applications",
        link: "https://react.dev/",
    },
    {
        image: typeScriptPicture,
        title: "TypeScript",
        describe: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript",
        link: "https://www.typescriptlang.org/",
    },
    {
        image: reduxPicture,
        title: "Redux Toolkit",
        describe: "Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code.",
        link: "https://redux.js.org/",
    },
]

const About: React.FC = () => {
    const renderTechStackList = (list: ITechnologyInfo[]): JSX.Element[] => list.map((item) => <TechnologyInfo key={item.title} element={item} />

    );

    return (
        <div className='container'>
            <div className='flex flex-col justify-between items-left'>
                <div className='text-lg flex items-center justify-between py-14 lg:gap-10 md:py-10 sm:py-8 sm:flex-col'>
                    <div className='w-1/2 md:w-full md:max-w-md'>
                        <h2 className='font-extrabold leading-loose text-transparent text-6xl bg-clip-text bg-gradient-to-br from-[#94F6FF] to-[#037DDB] mb-6 lg:text-5xl lg:leading-relaxed sm:text-4xl sm:leading-snug'>Crypto Coins</h2>
                        <p className='md:text-base'>Crypto Coins is a digital platform that provides information about crypto coins. I attempted to display the relevant crypto coins and their descriptions here. Well, I would also like to share with you the tech stack of the app and a short description of almost every UI component that I used on that stack.</p>
                    </div>
                    <img src={appIcon} alt="App Icon" className='mx-auto h-64 w-auto lg:h-52' />
                </div>
                <div className='text-lg md:text-base'>
                    <p>The application is fully functional thanks to <a rel="nofollow" target='blank' className='text-accent-300 hover:underline' href='https://docs.coincap.io/'>CoinCap API</a>. This api does not contain all the features that are presented in the example from the developers. But enough to create such a project. So if something happens with the api, the application will stop working :)</p>
                </div>
            </div>

            <div className='py-20 md:py-10 sm:py-5'>
                <div className='my-20 text-center text-primary-200 font-semibold uppercase text-2xl'>
                    Technologies
                </div>
                {renderTechStackList(elements)}
            </div>

        </div>
    )
}

export default About