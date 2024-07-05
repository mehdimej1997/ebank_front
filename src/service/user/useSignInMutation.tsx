import { useMutation } from '@tanstack/react-query';

import { SignInDto } from '@/dtos/user';

import { login } from './user.service';

export const useSignInMutation = () => {
  const mutation = useMutation({
    mutationFn: (credentials: SignInDto) => login(credentials),
    mutationKey: ['LOGIN'],
  });

  return mutation;
};
