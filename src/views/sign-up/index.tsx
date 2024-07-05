import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui';
import { UserSignUpForm } from '@/components/shared';

export const SignUp = () => {
  return (
    <>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Se Connecter
      </Link>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Créer un compte
            </h1>
            <p className="text-sm text-muted-foreground">
              Veuillez Remplire la formulaire
            </p>
          </div>
          <UserSignUpForm />
        </div>
      </div>
    </>
  );
};
