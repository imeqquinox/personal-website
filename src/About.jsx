import { useEffect, useRef } from "react"

export default function About() {
    return (
        <section className="p-8 flex items-center text-center flex-col bg-off-black text-off-white">
            <h1 className="pb-4 font-notoSans font-medium text-xl">About</h1>
            <div className="font-roboto text-base [&>*]:pb-4">
                <Paragraph>
                    Hi, I&apos;m Lewis I usually go by eqquinox online. I&apos;m a software engineer based in Edinburgh, Scotland.
                </Paragraph>
                <Paragraph>
                    My passive is in UI/UX design, front-end web development and creative coding.
                </Paragraph>
                <Paragraph>
                    I&apos;m always curious to learn about new technologies and ways of doing things.
                </Paragraph>
            </div>
        </section>
    )
}

function Paragraph({ children }) {
    const ref = useRef(null);
    // TODO: Losing styling from classname above, fix
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add(`animate-slideUpFadeIn`);
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <p ref={ref} className="opacity-0">
            {children}
        </p>
    )
}