import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

interface MaxWidthWrapperProps {
  className?: string;
  children?: ReactNode;
}

export const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ className, children }) => (
  <div className={classNames('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
    {children}
  </div>
);
