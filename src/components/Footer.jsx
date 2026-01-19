function Footer() {
    const year = new Date();

    return (
        <>
            <div className="bg-zinc-600 h-40 flex justify-around items-center-safe gap-5"> 
                <div>
                    <h1 className="text-2xl font-bold">Jefry Zega</h1>
                    <p className="text-xl">&copy; {year.getFullYear()} made with ❤️</p>
                </div>
                
                <div className="">
                    <h1 className="font-bold mb-3">Follow Me</h1>
                    <div className="flex gap-5">
                        <a href="https://www.instagram.com/jeffzzg" target="_blank"><img src="/assets/icon/instagram.svg" alt="instagram icon" className="w-8"/></a>
                        <a href="https://www.linkedin.com/in/jefryzega/" target="_blank"><img src="/assets/icon/linkedin.svg" alt="linkedin icon" className="w-8"/></a>
                        <a href="https://github.com/JefryZega" target="_blank"><img src="/assets/icon/github.svg" alt="github icon" className="w-8"/></a>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default Footer;