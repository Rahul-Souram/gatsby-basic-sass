/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CardAnimation = ({
  children,
  className,
  delaySec = 0,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const CircleAnimationPosition = 'top-=180 bottom-=220';
    const delayTime =  delaySec || 0.5;
    const element= ref.current;
    if (element != null) {
      const circle = element.querySelectorAll('.timeline-card, input, textarea, svg');
        for (let i = 0; i < circle.length; i += 1) {
          gsap.fromTo(
            circle[2 * i],
            { autoAlpha: 0, x: '-100' },
            {
              duration: 1.2,
              autoAlpha: 1,
              x: 0,
              delay: delayTime,
              scrollTrigger: {
                trigger: circle[2 * i],
                start: CircleAnimationPosition,
                toggleActions: 'play none none reverse',
              },
            }
          );
          gsap.fromTo(
            circle[2 * i + 1],
            { autoAlpha: 0, x: 100 },
            {
              duration: 2,
              autoAlpha: 1,
              x: 0,
              delay: delayTime,
              scrollTrigger: {
                trigger: circle[2 * i + 1],
                start: CircleAnimationPosition,
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
    }
  }, [delaySec]);

  return (
    <div ref={ref} className={className ?? className}>
      {children}
    </div>
  );
};
