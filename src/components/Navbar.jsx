import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="navbar py-7 flex items-center justify-between mr-15 ml-15">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
            </div>
            <ul className={`menu flex items-center gap-4 fixed left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-b-2xl transition-all md:bg-transparent md:transition-none sm:gap-10 md:translate-x-0 md:static md:opacity-100 ${active? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li>
                    <a href="#home" className="sm:text-lg text-base font-medium hover:underline">Home</a>
                </li>
                <li>
                    <a href="#about" className="sm:text-lg text-base font-medium hover:underline">About</a>
                </li>
                <li>
                    <a href="#project" className="sm:text-lg text-base font-medium hover:underline">Project</a>
                </li>
                <li>
                    <a href="#contact" className="sm:text-lg text-base font-medium hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    ) 
};

export default Navbar;
