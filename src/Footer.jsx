
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="pt-20 pb-4 px-6 flex flex-col bg-off-black [&>*]:text-off-white">
            <div className="pb-6">
                <span>
                    <a className="flex" href="https://www.linkedin.com/in/lewiswilson98/">
                        LinkedIn
                        <Arrow />
                    </a>
                </span>
                <span>
                    <a className="flex" href="https://github.com/imeqquinox">
                        GitHub
                        <Arrow />
                    </a>
                </span>
            </div>
            <div className="flex flex-col pb-6">
                <span>Get In Touch!</span>
                <span>lewiswilson1998@hotmail.co.uk</span>
            </div>
            <span className="self-center">&copy; {year} Lewis Wilson</span>
        </footer>
    )
}

function Arrow() {
    return (
        <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#FBFBFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
}