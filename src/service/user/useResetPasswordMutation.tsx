import { useMutation } from '@tanstack/react-query';

import { ResetPasswordDto } from '@/dtos/user';

import { resetPassword } from './user.service';

export const useResetPasswordMutation = () => {
  const mutation = useMutation({
    mutationFn: (credentials: ResetPasswordDto & { email: string }) =>
      resetPassword(credentials),
    mutationKey: ['RESET_PASSWORD'],
  });

  return mutation;
};
