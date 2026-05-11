import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  /** End value (number to count up to). */
  value: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Optional prefix (e.g. "$"). */
  prefix?: string;
  /** Optional suffix (e.g. "+", "M+"). */
  suffix?: string;
  /** Use comma-grouped formatting (5,000). Defaults to true. */
  format?: boolean;
  /** Optional className. */
  className?: string;
}

/**
 * Counts up from 0 to `value` once the element scrolls into view.
 * Plays once per mount.
 */
const AnimatedCounter = ({
  value,
  duration = 1.6,
  prefix = '',
  suffix = '',
  format = true,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => {
    const n = Math.floor(latest);
    return format ? n.toLocaleString() : String(n);
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
