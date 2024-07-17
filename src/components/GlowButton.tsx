import { cn } from '@/lib/utils';
import { m, Transition } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  background?: string;
  transition?: Transition;
  link?: string;
  label?: string;
}

const defaultBackground: string = '#e66465,#000000,#9198e5';
const defaultTransition: Transition = {
  ease: 'easeInOut',
  repeat: Infinity,
  duration: 5,
};

const GlowButton = ({
  className,
  background = defaultBackground,
  transition = defaultTransition,
  link,
  label,
  ...props
}: GlowButtonProps) => {
  return (
    <m.div
      className={cn(
        'rounded-3xl p-0.5 relative',
        'before:[background:inherit] before:rounded-[inherit] before:blur-lg before:top-0 before:absolute before:w-full before:h-full before:flex before:-z-10'
      )}
      initial={{
        background: `linear-gradient(0turn,${background})`,
      }}
      animate={{ background: `linear-gradient(1turn,${background})` }}
      transition={transition}
    >
      <a href={link}>
        <button className={cn('bg-black p-6 px-32 rounded-[22px]', className)} {...props}>
          {label}
        </button>
      </a>
    </m.div>
  );
};

export default GlowButton;
