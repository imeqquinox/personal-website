import { useEffect, useRef } from "react"

export default function About() {
    return (
        <section className="p-8 sm:p-14 flex items-center text-center flex-col bg-off-black text-off-white">
            <AnimatedElement><h1 className="pb-4 font-notoSans font-medium text-3xl sm:text-4xl lg:text-5xl">About</h1></AnimatedElement>
            <div className="font-roboto text-base sm:text-lg lg:text-xl  [&>*]:pb-4">
                <AnimatedElement>
                    <p>
                        Hi, I&apos;m Lewis I usually go by eqquinox online. I&apos;m a software engineer based in Edinburgh, Scotland.
                    </p>
                </AnimatedElement>
                <AnimatedElement>
                    <p>
                        My areas of interest are in UI/UX design, front-end web development and creative coding.
                    </p>
                </AnimatedElement>
                <AnimatedElement> 
                    <p>
                        I&apos;m always curious to learn about new technologies and ways of doing things.
                    </p>
                </AnimatedElement>
            </div>
        </section>
    )
}

function AnimatedElement({ children }) {
    const ref = useRef(null);
    
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
        <div ref={ref} className="opacity-0">
            {children}
        </div>
    )
}