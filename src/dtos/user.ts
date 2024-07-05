import z from 'zod';

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const UserSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  birthday: z.date(),
  address: z.string(),
  email: z.string().email(),
  cin: z.string(),
});

export const ResetPasswordSchema = z.object({
  oldPassword: z.string().min(6),
  newPassword: z.string().min(6),
});

export type ResetPasswordDto = z.infer<typeof ResetPasswordSchema>;
export type SignInDto = z.infer<typeof SignInSchema>;
export type UserDto = z.infer<typeof UserSchema>;
