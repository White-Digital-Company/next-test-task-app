'use client';

import { LayoutDashboard } from 'lucide-react';
import { Settings } from 'lucide-react';
import NavLink, { NavLinkInterface } from '@/components/NavLink';

const navLinks: NavLinkInterface[] = [
    {
        href: '/dashboard',
        children: 'Dashboard',
        icon: LayoutDashboard,
    },
    {
        href: '/settings',
        children: 'Settings',
        icon: Settings,
    },
];

export default function NavMenu() {
    return (
        <div className="space-y-4">
            {navLinks.map((link: NavLinkInterface) => (
                <NavLink href={link.href} key={link.href} icon={link.icon}>
                    {link.children}
                </NavLink>
            ))}
        </div>
    );
}
