'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import { Icons } from '@/components/icons';
import { FormField } from '@/components/shared';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '@/components/ui';
import { ResetPasswordDto, ResetPasswordSchema } from '@/dtos/user';
import { useToast } from '@/hooks/use-toast';
import { useResetPasswordMutation } from '@/service/user';

export const ResetPassword = () => {
  const { mutate, isPending } = useResetPasswordMutation();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const { toast } = useToast();

  const methods = useForm<ResetPasswordDto>({
    mode: 'onBlur',
    resolver: zodResolver(ResetPasswordSchema),
  });

  const submit = (val: ResetPasswordDto) => {
    const email = searchParams.get('email');
    if (!email)
      return toast({
        description: 'something went wrong',
        variant: 'destructive',
      });
    mutate(
      { ...val, email },
      {
        onSuccess: ({ data }) => {
          setCookie('user-session', data);
          replace('/dashboard');
        },

        onError: (err) => {
          const { response } = err as AxiosError;
          toast({
            description: response?.data as string,
            variant: 'destructive',
          });
        },
      }
    );
  };

  const logOut = () => {
    deleteCookie('user-session');
    replace('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Reset votre mot de passe</CardTitle>
          <CardDescription>Bievenue sur E-banck</CardDescription>
        </CardHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submit)}>
            <CardContent>
              <div className="grid gap-4">
                <FormField
                  required
                  name="oldPassword"
                  label="Mot de passe actuel"
                  render={({ field, ...rest }) => (
                    <Input {...field} {...rest} type="password" />
                  )}
                />
                <FormField
                  required
                  name="newPassword"
                  label="Nouveau Mot de passe"
                  render={({ field, ...rest }) => (
                    <Input {...field} {...rest} type="password" />
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                disabled={isPending}
                onClick={logOut}
              >
                Se Deconnecter
              </Button>
              <Button disabled={!methods.formState.isValid || isPending}>
                {isPending && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Confirmer
              </Button>
            </CardFooter>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};
