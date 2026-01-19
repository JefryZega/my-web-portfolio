import ProjectCard from "./ProjectCard";
import TechStack from "./TechStack";
import { ContactUs } from "./ContactUs";
import {techStack, projects} from "../data/projects";

function Container() {
    return (
        <>
            <section id="home" className="hero grid grid-cols-1 md:grid-cols-2 mx-15 items-center md:gap-6 gap-7">
                <div>
                    {/* Quotes */}
                    <div className="quotes flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                        <img src="/assets/img/jefry-img.png" alt="My Photos" className="w-10" />
                        <q>I turn ideas into code, and code into impact.</q>
                    </div>

                    {/* Hero Info */}
                    <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Jefry</h1>
                    <p className="text-base/loose mb-6 text-justify opacity-80 ">I'm a <b>Fullstack Developer</b> based in <b>Indonesia</b> who enjoys solving problems through code. I like building things that work well, are easy to maintain, and actually make life simpler for the people who use them. I focus on writing clean, readable code and continuously improving my skills.</p>

                    {/* Button */}
                    <div className="mt-10 flex gap-6">
                        <a href="" className="bg-blue-500 p-4 rounded hover:bg-blue-400 ">Resume</a>
                        <a href="" className="bg-zinc-700 p-4 rounded hover:bg-zinc-400 ">Send Email</a>
                    </div>
                </div>

                {/* Hero Image */}
                <img src="/assets/img/jefry-img.png" alt="Jefry Photo" className="w-125 rounded-2xl sm:m-auto md:mx-0 md:ml-auto md:items-center" />
            </section>

            {/* About Section */}
            <section id="about" className="about text-base/loose p-7 mx-3 md:mx-0 my-32 bg-zinc-700 flex flex-col gap-7 ">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-7">About Me</h1>
                    <p className="text-justify lg:text-xl opacity-80">In my work, I focus on creating software that is reliable, efficient, and easy to use. I enjoy exploring different technologies and finding the best approach to solve real problems.</p>       
                </div>

                <div>
                    <h1 className="text-2xl mb-4 font-bold">Tech Stack</h1>
                    <div className="grid gap-3 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3">
                        {techStack.map((tech) => (
                            <TechStack key={tech.id} data={tech} />
                        ))}
                        
                    </div>
                </div>
            </section>

            {/* Project Section */}
            <section id="project" className="mx-3 sm:mx-15 mb-32 ">
                <h1 className="text-5xl font-bold text-center mb-10">Project</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} data={project} />
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="text-center mx-15 mb-32 flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold  mb-10">Contact Me</h1>
                
                <ContactUs/>
                
            </section>
        </>
        
    )
}

export default Container;