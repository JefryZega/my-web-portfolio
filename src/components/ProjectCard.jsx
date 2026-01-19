function ProjectCard({ data }) {
    return (
        <div className="project-card bg-zinc-500 p-7  flex flex-col gap-3  rounded">
            <img src={data.image} alt={data.title} className="w-full h-70 object-cover rounded" />
            <h3 className="font-bold text-3xl mt-3">{data.title}</h3>
            <p className="text-justify">{data.desc}</p>
            <p><b>Tech: {data.techStack} </b></p>
            <p>Live Demo: <a href={data.link} target="_blank">Here</a></p>
        </div>
    );
}

export default ProjectCard;
