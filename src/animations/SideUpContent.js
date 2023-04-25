/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SlideUpContent = ({
  children,
  className,
  durationTime,
  delaySec = 0,
}) => {

  const ref = useRef(null);

  useEffect(() => {
    const TitleAnimationPosition = 'left-=70 right-=70';
    const delayTime = delaySec;
    const element = ref.current;
   let line = element.querySelectorAll('li, div, p');
   for (let i = 0; i < line.length; i += 1) {
      gsap.fromTo(
        line[2 * i],
        { autoAlpha: 0, y: 100 },
        {
          duration: durationTime ?? 0.5,
          autoAlpha: 1,
          y: 0,
          delay: delayTime,
          scrollTrigger: {
            trigger: line,
            start: TitleAnimationPosition,
            toggleActions: 'play none none reverse',
          },
        }
      );
      gsap.fromTo(
        line[2 * i + 1],
        { autoAlpha: 0, y: -100 },
        {
          duration: durationTime ?? 0.5,
          autoAlpha: 1,
          y: 0,
          delay: delayTime,
          scrollTrigger: {
            trigger: line,
            start: TitleAnimationPosition,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [delaySec, durationTime]);

  return (
    <div ref={ref} className={className ?? className}>
      {children}
    </div>
  );
};
