import React, { useState } from "react";

const About = () => {
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <div id="about" className="mx-auto w-full md:w-3/5 mt-8 md:mt-16 px-8">
            <h1 className="title-section">About me</h1>
            <div className="flex flex-col space-y-8 bg-darkBlue rounded-lg my-6 md:my-12">
                <div className="text-start mx-auto py-4 md:py-8">
                    <p className="text-about">I am a passionate full-stack developer with expertise in front-end technologies such as HTML, CSS, JavaScript, React, Python, and Flask. Having worked on collaborative projects, I have successfully bridged the gap between front-end and back-end components, ensuring smooth integration and functionality. One of my proudest accomplishments was contributing to a team project that consolidated all the skills I gained during my bootcamp, further solidifying my technical foundation. </p>
                    <span 
                        className="text-about hover:text-lightBlue md:hidden cursor-pointer" 
                        onClick={toggleReadMore}
                    >
                        {readMore ? "Less" : "More"}
                    </span>
                    {readMore && (
                        <>
                            <p className="text-about md:hidden">Beyond development, I also bring a unique strength: leveraging my background in sales and customer service. I’ve generated over $125,000 in revenue by strategically engaging with a fitness community of over 50,000 members through Instagram. With more than five years of experience working in the North American market, I understand how to create user-driven solutions that make an impact, whether in code or customer interactions.</p>  
                            <p className="text-about md:hidden">What excites me most is solving real-world problems through coding while continuously learning and growing. I'm eager to learn about and contribute to new types of businesses, expanding my knowledge and making a meaningful impact. Outside of work, I love spending quality time with my wife and daughter, learning about the latest technologies and gadgets, and enjoying some fun with friends through video games and soccer. Let’s connect and turn ideas into powerful solutions!</p>
                        </>
                    )}
                    <p className="text-about hidden md:flex">Beyond development, I also bring a unique strength: leveraging my background in sales and customer service. I’ve generated over $125,000 in revenue by strategically engaging with a fitness community of over 50,000 members through Instagram. With more than five years of experience working in the North American market, I understand how to create user-driven solutions that make an impact, whether in code or customer interactions.</p>  
                    <p className="text-about hidden md:flex">What excites me most is solving real-world problems through coding while continuously learning and growing. I'm eager to learn about and contribute to new types of businesses, expanding my knowledge and making a meaningful impact. Outside of work, I love spending quality time with my wife and daughter, learning about the latest technologies and gadgets, and enjoying some fun with friends through video games and soccer. Let’s connect and turn ideas into powerful solutions!</p>
                </div>
            </div>
        </div>
    );
};

export default About;