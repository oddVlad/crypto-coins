import React, { ReactNode } from 'react'
import appIcon from "../../assets/crypto.png";
import tailwindcssPicture from "../../assets/tailwindcss.svg";
import chartjsPicture from "../../assets/chartjs.svg";
import typeScriptPicture from "../../assets/Typescript.svg";
import reactPicture from "../../assets/React.svg";
import reduxPicture from "../../assets/ReduxTooltik.svg";
import SpinElement from '../../components/SpinElement';
import { ISpinElement } from '../../types/common';
import { getSpinElementPosition } from '../../utils/math';

const elements: ISpinElement[] = [
    {
        image: tailwindcssPicture,
        title: "Tailwindcss",
        describe: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file",
    },
    {
        image: chartjsPicture,
        title: "Chart.js",
        describe: "Chart.js is a free, open-source JavaScript library for data visualization, which supports eight chart types. Chart.js renders in HTML5 canvas and is widely covered as one of the best data visualization libraries. It is available under the MIT license",
    },
    {
        image: reactPicture,
        title: "React",
        describe: "React (React.js/ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. React can be used to develop single-page, mobile, or server-rendered applications",
    },
    {
        image: typeScriptPicture,
        title: "TypeScript",
        describe: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript",
    },
    {
        image: reduxPicture,
        title: "Redux Toolkit",
        describe: "Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code.",
    },
]

interface IAboutProps { }


const About: React.FC<IAboutProps> = () => {

    const renderSpinElements = (list: ISpinElement[]) => list.map((item, index) => {
        const position = getSpinElementPosition(index, list.length);

        return <SpinElement key={item.title} element={item} position={position} />

    });

    return (
        <div className='m-auto text-lg flex items-center justify-between py-20'>
            <div className='w-2/5'>
                <h2 className='font-extrabold leading-loose text-transparent text-6xl bg-clip-text bg-gradient-to-br from-[#94F6FF] to-[#037DDB] mb-6'>Crypto Coins</h2>
                <p>Crypto Coins is a digital platform that provides information about crypto coins. I attempted to display the relevant crypto coins and their descriptions here. Well, I would also like to share with you the tech stack of the app and a short description of almost every UI component that I used on that stack.</p>
            </div>
            <div className='w-2/5'>
                <div className='h-[500px] w-[500px] flex items-center justify-center relative '>
                    <img src={appIcon} alt="App Icon" className='m-auto h-40 w-auto ' />
                    {renderSpinElements(elements)}
                </div>
            </div>
        </div>
    )
}

export default About