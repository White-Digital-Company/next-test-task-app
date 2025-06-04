'use client';
import { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { mockData } from '@/mocks/mockData';
import { InputError } from '../InputError';

export function SettingsForm() {
  const [name, setName] = useState(mockData.user.fullName);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; password?: string }>(
    {},
  );

  const isInvalid = !!errors.name || !!errors.password;

  useEffect(() => {
    const newErrors: typeof errors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (password && (password.length < 4 || password.length > 12)) {
      newErrors.password = 'Password must be between 4 and 12 characters';
    }
    setErrors(newErrors);
  }, [name, password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-sm sm:text-base border border-[#CCCCCC] bg-white text-black rounded-[8px] placeholder:text-[#666666] font-normal p-3 sm:p-4"
          aria-invalid={!!errors.name}
        />
        {errors.name && <InputError text={errors.name} />}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-sm sm:text-base border border-[#CCCCCC] bg-white text-black rounded-[8px] placeholder:text-[#666666] font-normal p-3 sm:p-4"
          aria-invalid={!!errors.password}
        />
        {errors.password ? (
          <InputError text={errors.password} />
        ) : (
          <span className="text-[#666666] text-xs font-(family-name:--font-noto-sans)">
            Your password is between 4 and 12 characters
          </span>
        )}
      </div>

      <Button
        type="submit"
        disabled={isInvalid}
        className={`w-full sm:w-auto md:self-end sm:px-[120px] py-2 rounded-[4px] text-white cursor-pointer transition
          ${isInvalid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#64C882] hover:bg-[#57b774]'}`}
      >
        Save
      </Button>
    </form>
  );
}
