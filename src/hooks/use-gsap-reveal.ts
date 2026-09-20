import { useEffect, type RefObject } from "react";

export function useGsapReveal(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (
      !scope.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, triggerModule]) => {
        const gsap = gsapModule.default;
        const ScrollTrigger = triggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const context = gsap.context(() => {
          gsap.utils
            .toArray<HTMLElement>("[data-reveal]")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { y: 56, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.9,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 86%",
                    once: true,
                  },
                },
              );
            });

          gsap.utils
            .toArray<HTMLElement>("[data-stagger]")
            .forEach((container) => {
              gsap.fromTo(
                Array.from(container.children),
                { y: 34, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: container,
                    start: "top 84%",
                    once: true,
                  },
                },
              );
            });

          gsap.utils
            .toArray<HTMLElement>("[data-parallax]")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { yPercent: -5, scale: 1.08 },
                {
                  yPercent: 5,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.7,
                  },
                },
              );
            });
        }, scope);

        cleanup = () => context.revert();
      },
    );

    return () => cleanup();
  }, [scope]);
}
