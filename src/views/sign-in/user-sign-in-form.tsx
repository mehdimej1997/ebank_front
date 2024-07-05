'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { ComponentPropsWithoutRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

import { Icons } from '@/components/icons';
import { FormField } from '@/components/shared';
import { Button, Input } from '@/components/ui';
import { SignInDto, SignInSchema } from '@/dtos/user';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useSignInMutation } from '@/service/user';

type UserSignInFormProps = ComponentPropsWithoutRef<'div'>;

export const UserSignInForm = (props: UserSignInFormProps) => {
  const { mutate, isPending } = useSignInMutation();
  const { replace } = useRouter();
  const { toast } = useToast();

  const methods = useForm<SignInDto>({
    mode: 'onBlur',
    resolver: zodResolver(SignInSchema),
  });

  const submit = (val: SignInDto) =>
    mutate(val, {
      onSuccess: ({ data }) => {
        setCookie('user-session', data);
        replace(`/dashboard?email=${methods.getValues('email')}`);
      },

      onError: (err) => {
        const { response } = err as AxiosError;
        toast({
          description: response?.data as string,
          variant: 'destructive',
        });
      },
    });

  return (
    <div className={cn('grid gap-6', props?.className)} {...props}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submit)}>
          <div className="grid gap-4">
            <FormField
              required
              name="email"
              label="Email"
              render={({ field, ...rest }) => <Input {...field} {...rest} />}
            />
            <FormField
              required
              name="password"
              label="Mot de passe"
              render={({ field, ...rest }) => (
                <Input {...field} {...rest} type="password" />
              )}
            />
            <Button disabled={!methods.formState.isValid}>
              {isPending && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Se Connecter
            </Button>
          </div>
        </form>
      </FormProvider>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
    </div>
  );
};
