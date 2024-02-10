import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { Button } from '@/components/ui';
import type { PRODUCT_CATEGORIES } from '@/utils/constants';

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

export const NavItem: FC<NavItemProps> = ({ category, handleOpen, isOpen, isAnyOpen }) => (
  <div className='flex'>
    <div className='relative flex items-center'>
      <Button className='gap-1.5' variant={isOpen ? 'secondary' : 'ghost'} onClick={handleOpen}>
        {category.label}
        <ChevronDown
          className={classNames('h-4 w-4 transition-all text-muted-foreground', {
            '-rotate-180': isOpen,
          })}
        />
      </Button>
    </div>

    {isOpen ? (
      <div
        className={classNames('absolute inset-x-0 top-full text-sm text-muted-foreground', {
          'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen,
        })}
      >
        <div aria-hidden='true' className='absolute inset-0 top-1/2 bg-white shadow' />

        <div className='relative bg-white'>
          <div className='mx-auto max-w-7xl px-8'>
            <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
              <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                {category.featured.map((item) => (
                  <div key={item.name} className='group relative text-base sm:text-sm'>
                    <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                      <Image
                        fill
                        alt='product category image'
                        className='object-cover object-center'
                        src={item.imageSrc}
                      />
                    </div>

                    <Link className='mt-6 block font-medium text-gray-900' href={item.href}>
                      {item.name}
                    </Link>
                    <p aria-hidden='true' className='mt-1'>
                      Shop now
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null}
  </div>
);
