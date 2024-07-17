import { cn } from '@/lib/utils';
import { m, Transition } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerClassName?: string;
  className?: string;
  background?: string;
  transition?: Transition;
  link?: string;
  label?: string;
}

// const defaultBackground: string = '#f29163,#000000,#9198e5';
// const defaultBackground: string = '#4bc49c,#000000,#5e2ec7';
const defaultBackground: string = '#f29163,#000000,#9198e5';
const defaultTransition: Transition = {
  ease: 'easeInOut',
  repeat: Infinity,
  duration: 5,
};

const GlowButton = ({
  className,
  background = defaultBackground,
  transition = defaultTransition,
  containerClassName,
  link,
  label,
  ...props
}: GlowButtonProps) => {
  return (
    <m.div
      className={cn('rounded-3xl p-0.5 relative bgFilterGlow', containerClassName)}
      initial={{
        background: `linear-gradient(0turn,${background})`,
      }}
      animate={{ background: `linear-gradient(1turn,${background})` }}
      transition={transition}
    >
      <a href={link}>
        <button className={cn('bg-black p-6 rounded-[22px]', className)} {...props}>
          {label}
        </button>
      </a>
    </m.div>
  );
};

export default GlowButton;
