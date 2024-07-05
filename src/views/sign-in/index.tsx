import Link from 'next/link';
import React from 'react';

import { buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';

import { UserSignInForm } from './user-sign-in-form';

export const SignIn = () => (
  <>
    <Link
      href="/sign-up"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute right-4 top-4 md:right-8 md:top-8'
      )}
    >
      S&apos;inscrire
    </Link>
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Se Connecter
          </h1>
          <p className="text-sm text-muted-foreground">
            Veuillez saisir vos identifiants pour vous connecter.
          </p>
        </div>
        <UserSignInForm />
      </div>
    </div>
  </>
);
