import { useMutation } from '@tanstack/react-query';

import { UserDto } from '@/dtos/user';

import { createUser } from './user.service';

export const useSignUpMutation = () => {
  const mutation = useMutation({
    mutationFn: (userDto: UserDto) => createUser(userDto),
    mutationKey: ['CREATE_USER'],
  });

  return mutation;
};
