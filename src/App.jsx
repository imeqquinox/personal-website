import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Works from "./Works";
import { useEffect, useRef } from "react";

export default function App() {
    const cursorRef = useSmoothCursor();

    return (
        <>
            <Hero />
            <About />
            <Works />
            <Footer />
            <div id="cursor" ref={cursorRef} />
        </>
    )
}

function useSmoothCursor() {
    const cursorRef = useRef(null);
    const targetX = useRef(0);
    const targetY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);

    const lerp = (start, end, factor) => {
        return start * (1 - factor) + end * factor;
    };

    useEffect(() => {
        onmousemove = (e) => {
            targetX.current = e.clientX;
            targetY.current = e.clientY;
        };

        var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
        if (mobile) {
            if (cursorRef.current) {
                cursorRef.current.style.display = 'none';
            }
        }

        const updateCursor = () => {
            currentX.current = lerp(currentX.current, targetX.current, 0.2);
            currentY.current = lerp(currentY.current, targetY.current, 0.2);

            if (cursorRef.current) {
                cursorRef.current.style.left = `${currentX.current}px`;
                cursorRef.current.style.top = `${currentY.current}px`;
            }

            requestAnimationFrame(updateCursor);
        };

        requestAnimationFrame(updateCursor);
    }, []);

    return cursorRef;
}