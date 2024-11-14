import { useEffect, useRef } from "react"

export default function Works() {
    return (
        <section className="p-8 flex items-center text-center flex-col bg-off-black text-off-white">
            <h1 className="pb-4 font-notoSans font-medium text-xl">Works</h1>
            <div className="pb-12 font-roboto text-base">
                <WorkCard title={'Nano Project'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel luctus ipsum. Aenean aliquam massa sit amet mauris blandit luctus. Nunc tortor dui, consequat at sagittis vitae, pellentesque et nisl.'} />
                <WorkCard title={'Nano Project'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel luctus ipsum. Aenean aliquam massa sit amet mauris blandit luctus. Nunc tortor dui, consequat at sagittis vitae, pellentesque et nisl.'} />
                <WorkCard title={'Nano Project'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel luctus ipsum. Aenean aliquam massa sit amet mauris blandit luctus. Nunc tortor dui, consequat at sagittis vitae, pellentesque et nisl.'} />
                <WorkCard title={'Nano Project'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel luctus ipsum. Aenean aliquam massa sit amet mauris blandit luctus. Nunc tortor dui, consequat at sagittis vitae, pellentesque et nisl.'} />
                <hr className="border-none mt-12 h-[2px] w-full bg-white-fade" />
            </div>
        </section>
    )
}

function WorkCard(props) {
    const ref = useRef(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('animate-slideInFromLeft');
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.1 }
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
        <div ref={ref} className="py-4 my-4 border-off-white/[0.8] shadow-inset-white border rounded-[30px] opacity-0">
            <div className="z-10">
                <div className="h-[100px]">
                    Image/Gif
                </div>
                <div>
                    <h2 className="font-italiana font-medium text-xl">{props.title}</h2>
                    <p className="font-roboto text-base">{props.description}</p>
                </div>
            </div>
        </div>
    )
}