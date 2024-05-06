'use client';

import { zodResolver } from '@hookform/resolvers';
import classnames from 'classnames';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Logo } from '@/components';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { TAuthCredentialValidator } from '@/lib/validators/accountCredentialValidator';
import { AuthCredentialValidator } from '@/lib/validators/accountCredentialValidator';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(AuthCredentialValidator) });

  const onSubmit = ({ email, password }: TAuthCredentialValidator) => {};

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-2'>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  {...register('email')}
                  placeholder='you@example.com'
                  className={classnames({
                    'focus-visible:ring-red-500': errors.email,
                  })}
                />
              </div>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  {...register('password')}
                  placeholder='Password'
                  className={classnames({
                    'focus-visible:ring-red-500': errors.password,
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
