import { cn } from '@/lib/utils';
import { m, Transition, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

type AnimatedTextProps = {
  className?: string;

  type?: 'word' | 'letters';
  staggerChildren?: number;
  TextVariants: Variants;
  transition?: Transition;
  text: string;
  delayChild?: number;
};

const AnimatedText = ({
  className,
  text,
  TextVariants,
  type = 'word',
  staggerChildren = type == 'word' ? 0.175 : 0.05,
  transition,
  delayChild = 0,
}: AnimatedTextProps) => {
  let items: string | string[] = text;
  if (type == 'word') {
    items = items.split(' ');
  } else {
    items = [...items];
  }
  const ref = useRef(null);
  const InView = useInView(ref, { once: true });

  return (
    <m.div
      ref={ref}
      className={cn('flex', className)}
      transition={{
        staggerChildren: staggerChildren,
        delayChildren: delayChild,
      }}
      initial="initial"
      animate={InView ? 'animate' : 'initial'}
    >
      {items.map((char, index) => {
        if (char == ' ')
          return (
            <m.span variants={TextVariants} transition={transition} key={index}>
              &nbsp;
            </m.span>
          );
        return (
          <m.span
            className="whitespace-nowrap"
            variants={TextVariants}
            transition={transition}
            key={index}
          >
            {char}
            {type == 'word' && !!(index != items.length - 1) && <>&nbsp;</>}
          </m.span>
        );
      })}
    </m.div>
  );
};

export default AnimatedText;
