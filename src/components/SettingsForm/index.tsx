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
          className="text-sm sm:text-base border border-[#CCCCCC] bg-white text-black rounded-[8px] placeholder:text-[#666666] font-normal p-3 sm:p-4"
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
          className="text-sm sm:text-base border border-[#CCCCCC] bg-white text-black rounded-[8px] placeholder:text-[#666666] font-normal p-3 sm:p-4"
          aria-invalid={!!errors.password}
        />
        {errors.password ? (
          <InputError text={errors.password.message} />
        ) : (
          <span className="text-[#666666] text-xs font-(family-name:--font-noto-sans)">
            Your password is between 4 and 12 characters
          </span>
        )}
      </div>

      <Button
        type="submit"
        disabled={!isValid}
        className={`w-full md:self-end md:max-w-[272px] py-2 rounded-[4px] transition
          ${!isValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#64C882] hover:bg-[#57b774]'}`}
      >
        Save
      </Button>
    </form>
  );
}
