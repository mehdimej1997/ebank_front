import { ResetPasswordDto, SignInDto, UserDto } from '@/dtos/user';

import { api } from '../apiConfig';
import { USERS_URLS } from '../constants';

export const createUser = (userDto: UserDto) =>
  api.post(USERS_URLS.SAVE_USER, userDto);

export const login = (credentials: SignInDto) =>
  api.post<{ status: string; role: string; token: string }>(
    USERS_URLS.SIGN_IN,
    credentials
  );

export const resetPassword = (
  credentials: ResetPasswordDto & { email: string }
) =>
  api.post<{ status: string; role: string; token: string }>(
    USERS_URLS.CHANGE_PASSWORD,
    credentials
  );
