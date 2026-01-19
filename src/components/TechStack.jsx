function TechStack({data}) {
    return (
        <>
            <div className="tech-card bg-zinc-900 p-2 flex items-center gap-3 rounded">
                <img src={data.image} alt={data.tech} c className="w-5"/>
                <p className="font-bold">{data.tech}</p>
            </div>
        </>
    )
}

export default TechStack;