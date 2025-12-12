import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'navy' | 'cool-grey' | 'lime';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  containerClassName,
  background = 'white',
  ...props 
}) => {
  const bgColors = {
    white: 'bg-white',
    navy: 'bg-navy text-white',
    'cool-grey': 'bg-cool-grey',
    lime: 'bg-lime text-navy'
  };

  return (
    <section className={cn('py-20 lg:py-28', bgColors[background], className)} {...props}>
      <div className={cn('container mx-auto px-4', containerClassName)}>
        {children}
      </div>
    </section>
  );
};
