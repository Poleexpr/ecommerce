'use client';

import classnames from 'classnames';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Logo } from '@/components';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Page = () => {
  const x = 0;

  return (
    <div className='container relative flex flex-col items-center justify-center pt-20 lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <Logo className='h-20 w-20' />
          <h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>

          <Link
            href='/sign-in'
            className={buttonVariants({
              variant: 'link',
              className: 'gap-1.5',
            })}
          >
            Already have an account? Sign-in
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='grid gap-6'>
          <form onSubmit={}>
            <div className='grid gap-2'>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  placeholder='you@example.com'
                  className={classnames({
                    'focus-visible:ring-red-500': true,
                  })}
                />
              </div>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  placeholder='Password'
                  className={classnames({
                    'focus-visible:ring-red-500': true,
                  })}
                />
              </div>
              <Button>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
