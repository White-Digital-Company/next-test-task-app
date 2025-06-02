'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface NavLinkInterface {
    href: string;
    children: React.ReactNode;
    icon: LucideIcon;
}

export default function NavLink({ href, children, icon: Icon }: NavLinkInterface) {
    const path = usePathname();
    const isActive = path.startsWith(href);

    return (
        <Link
            href={href}
            className={cn('text-[14px] flex gap-3', isActive ? 'text-[#64C882]' : 'text-[#AAAAAA]')}
        >
            <Icon className="w-5 h-5" />
            {children}
        </Link>
    );
}
