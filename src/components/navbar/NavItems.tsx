'use client';

import { useEffect, useRef, useState } from 'react';

import { PRODUCT_CATEGORIES } from '@/utils/constants';
import { useOnClickOutside } from '@/utils/hooks';

import { NavItem } from './NavItem';

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'escape') {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div ref={navRef} className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => (activeIndex === i ? setActiveIndex(null) : setActiveIndex(i));

        const isOpen = i === activeIndex;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
};
