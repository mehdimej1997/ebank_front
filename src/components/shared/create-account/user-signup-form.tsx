'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ComponentPropsWithoutRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';

import { Icons } from '@/components/icons';
import { FormField } from '@/components/shared';
import { Button, DatePicker, Input } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useSignUpMutation } from '@/service/user';
import { UserDto, UserSchema } from '@/dtos/user';
import { useToast } from '@/hooks/use-toast';

type UserSignUpFormProps = ComponentPropsWithoutRef<'div'>;

export const UserSignUpForm = (props: UserSignUpFormProps) => {
  const { mutate, isPending } = useSignUpMutation();
  const { replace } = useRouter();
  const { toast } = useToast();

  const methods = useForm<UserDto>({
    resolver: zodResolver(UserSchema),
    mode: 'all',
  });

  const submit = (userDto: UserDto) =>
    mutate(userDto, {
      onSuccess: () => {
        toast({
          description: 'Compte créer avec succes vueillez vérifier votre email',
        });
        replace('/');
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
              name="lastname"
              label="Nom"
              render={({ field, ...rest }) => <Input {...field} {...rest} />}
            />
            <FormField
              required
              name="firstname"
              label="Prénom"
              render={({ field, ...rest }) => <Input {...field} {...rest} />}
            />
            <FormField
              required
              name="email"
              label="Email"
              render={({ field, ...rest }) => <Input {...field} {...rest} />}
            />
            <FormField
              required
              name="birthday"
              label="Date de naissance"
              render={({ field, ...rest }) => (
                <DatePicker {...field} {...rest} />
              )}
            />
            <FormField
              required
              name="address"
              label="Address"
              render={({ field, ...rest }) => <Input {...field} {...rest} />}
            />
            <FormField
              required
              name="cin"
              label="CIN"
              render={({ field, ...rest }) => <Input {...field} {...rest} />}
            />
            <Button disabled={!methods.formState.isValid || isPending}>
              {isPending && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Confirmer
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
