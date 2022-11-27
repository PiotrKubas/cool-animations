import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import './flower.scss';
import { Core, LeafA, LeafB, Pot } from './icons';
import { ReactComponent as FlowerTop } from './flower-top.svg';

export const Flower = () => {
    const tl = gsap.timeline();

    const coreRef = useRef(null);
    const potRef = useRef(null);

    const leaf1 = useRef(null);
    const leaf2 = useRef(null);
    const leaf3 = useRef(null);
    const leaf4 = useRef(null);

    const flowerRef = useRef(null);

    useEffect(() => {
        tl.from(potRef.current, {
            opacity: 0,
            delay: 1,
            duration: 1,
            y: -100,
            filter: 'blur(10px)',
        });

        tl.from(leaf1.current, {
            opacity: 0,
            delay: 1,
            duration: 1,
            x: -30,
            scale: 0,
        });
        tl.from(leaf2.current, {
            opacity: 0,
            delay: 1,
            duration: 1,
            x: 30,
            scale: 0,
        });
        tl.from(leaf3.current, {
            opacity: 0,
            delay: 1,
            duration: 1,
            x: -30,
            scale: 0,
        });
        tl.from(leaf4.current, {
            opacity: 0,
            delay: 1,
            duration: 1,
            x: 30,
            scale: 0,
        });
        tl.from(flowerRef.current, {
            opacity: 0,
            delay: 1,
            duration: 3,
            y: 100,
            scale: 0,
            ease: 'back.out(3)',
            filter: 'grayscale(100%) blur(5px)',
        });
        tl.from(
            coreRef.current,
            {
                opacity: 0,
                duration: 12,
                delay: 0,
                scale: 0.2,
                y: 200,
                right: 0,
            },
            '<-=9'
        );
    }, []);

    return (
        <div className="flower">
            <div className="flower-area">
                <FlowerTop ref={flowerRef} className="flower-top" />
                <div className="flower-core">
                    <Core ref={coreRef} />
                    <span className="leaf-right" style={{ bottom: '5%' }}>
                        <LeafA ref={leaf1} />
                    </span>
                    <span className="leaf-left" style={{ bottom: '25%' }}>
                        <LeafB ref={leaf2} />
                    </span>
                    <span className="leaf-right" style={{ bottom: '45%' }}>
                        <LeafA ref={leaf3} />
                    </span>
                    <span className="leaf-left" style={{ bottom: '65%' }}>
                        <LeafB ref={leaf4} />
                    </span>
                </div>

                <Pot ref={potRef} />
            </div>
        </div>
    );
};
