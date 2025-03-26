import React from "react";
import { SiReact, SiTailwindcss, SiJavascript, SiPython, SiHtml5, SiCss3, SiBootstrap, SiFlask, SiTypescript, SiGithub } from "react-icons/si";

const Stack = () => {
    return (
        <div id='stack' className="mx-auto w-full md:w-3/5 md:mt-16 px-8">
            <div className="flex flex-col space-y-8 mt-12">
                <h2 className="title-section">Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full bg-darkBlue rounded-lg p-8">
                    <div className="icon-stack">
                        <SiReact className="text-6xl" />
                        <h2 className="text-xl">React</h2>
                    </div>
                    <div className="icon-stack">
                        <SiTailwindcss className="text-6xl" />
                        <h2 className="text-xl">Tailwind</h2>
                    </div>
                    <div className="icon-stack">
                        <SiJavascript className="text-6xl" />
                        <h2 className="text-xl">JavaScript</h2>
                    </div>
                    <div className="icon-stack">
                        <SiTypescript className="text-6xl" />
                        <h2 className="text-xl">TypeScript</h2>
                    </div>
                    <div className="icon-stack">
                        <SiPython className="text-6xl" />
                        <h2 className="text-xl">Python</h2>
                    </div>
                    <div className="icon-stack">
                        <SiHtml5 className="text-6xl" />
                        <h2 className="text-xl">HTML5</h2>
                    </div>
                    <div className="icon-stack">
                        <SiCss3 className="text-6xl" />
                        <h2 className="text-xl">CSS3</h2>
                    </div>
                    <div className="icon-stack">
                        <SiBootstrap className="text-6xl" />
                        <h2 className="text-xl">Bootstrap</h2>
                    </div>
                    <div className="icon-stack">
                        <SiFlask className="text-6xl" />
                        <h2 className="text-xl">Flask</h2>
                    </div>
                    <div className="icon-stack">
                        <SiGithub className="text-6xl" />
                        <h2 className="text-xl">Github</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stack;