'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    password: z
        .string()
        .min(4, 'Password must be at least 4 characters')
        .max(12, 'Password must be at most 12 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export default function SavePasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: 'User Random',
            password: '',
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <Label htmlFor="name" className="mb-2 text-[12px] text-textGray">
                User
            </Label>
            <Input
                id="name"
                type="text"
                {...register('name')}
                className="mb-1 border-borderInput"
            />
            {errors.name && <p className="text-red-500 text-[12px] mb-2">{errors.name.message}</p>}

            <Label htmlFor="password" className="mb-2 text-[12px] text-textGray">
                Password
            </Label>
            <Input
                id="password"
                type="password"
                placeholder="Enter password"
                {...register('password')}
                className="mb-1"
            />
            <p className="text-textGray text-[12px] mb-4">
                Your password is between 4 and 12 characters
            </p>
            {errors.password && (
                <p className="text-red-500 text-[12px] mb-2">{errors.password.message}</p>
            )}

            <div className="flex justify-end">
                <Button
                    type="submit"
                    className="py-2 px-32 bg-primaryGreen rounded-sm hover:bg-[#34ad58]"
                >
                    Save
                </Button>
            </div>
        </form>
    );
}
