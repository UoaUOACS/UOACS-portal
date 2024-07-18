import { useRef } from 'react';

import { useScroll, useTransform, m } from 'framer-motion';
import { UOACS } from '@/assets/svgs';
import { cn } from '@/lib/utils';

const logos = [UOACS];

export const FooterLogos = ({ className }: { className?: string }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-125, 0]);

  return (
    <div
      className={cn('Card-shadow relative h-[150px] w-full overflow-hidden bg-black', className)}
      ref={container}
    >
      <m.div style={{ y }} className="flex h-full items-center justify-center gap-10 p-10">
        {logos.map((image, i) => {
          return <img key={i} className="w-[150px]" src={image} />;
        })}
      </m.div>
    </div>
  );
};
