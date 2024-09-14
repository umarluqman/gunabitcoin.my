import { TextEffect } from "./core/text-effect";

export function HeroText() {
  return (
    <div className="flex flex-col space-y-0">
      <TextEffect
        per="char"
        delay={0.5}
        variants={{
          container: {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              rotateX: 90,
              y: 10,
            },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          },
        }}
      >
        Guna Bitcoin
      </TextEffect>
      <TextEffect
        per="char"
        delay={2.5}
        className="pt-12 text-xs"
        preset="blur"
      >
        (and delay!)
      </TextEffect>
    </div>
  );
}
