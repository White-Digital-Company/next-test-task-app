'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { InputError } from '../InputError';
import { mockData } from '@/mocks/mockData';
import { SettingsFormData, SettingsSchema } from '@/schemas/settingsSchema';

export function SettingsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SettingsFormData>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: mockData.user.fullName,
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: SettingsFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && <InputError text={errors.name.message} />}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register('password')}
          aria-invalid={!!errors.password}
        />
        {errors.password ? (
          <InputError text={errors.password.message} />
        ) : (
          <span className="text-grayText text-xs font-noto-sans">
            Your password is between 4 and 12 characters
          </span>
        )}
      </div>

      <Button
        type="submit"
        disabled={!isValid}
        className={`w-full md:self-end md:max-w-[272px] py-2 rounded-[4px] transition
          ${!isValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-greenPrimary hover:bg-greenPrimaryHover'}`}
      >
        Save
      </Button>
    </form>
  );
}
