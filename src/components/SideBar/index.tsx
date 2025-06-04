'use client';
import { DashboardIcon, SettingsIcon } from '@/assets';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getNameWithSurnameInitial } from '@/utils/getNameWithSurnameInitial';
import { mockData } from '@/mocks/mockData';

export default function Sidebar() {
  const pathname = usePathname();
  const { projectName, user } = mockData;

  const navItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: DashboardIcon,
    },
    {
      href: '/settings',
      label: 'Settings',
      icon: SettingsIcon,
    },
  ];

  return (
    <aside className="hidden md:flex w-60 bg-white dark:bg-gray-900 p-7 flex-col justify-between min-h-screen">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-[#FF9F24] flex items-center justify-center text-white font-medium text-lg">
            C
          </div>
          <h1 className="uppercase font-semibold text-xl">{projectName}</h1>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const colorClass = isActive
              ? 'text-[#64C882] dark:bg-gray-800'
              : 'text-[#AAAAAA] hover:text-[#64C882]';

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 py-2 rounded text-sm font-medium transition-colors ${colorClass}`}
              >
                <item.icon />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="w-8 h-8">
          <AvatarImage src={user.avatarUrl} alt="User avatar" />
          <AvatarFallback className="bg-[#C4C4C4]" />
        </Avatar>
        <div className="text-xs">
          <div className="font-medium">
            {getNameWithSurnameInitial(user.fullName)}
          </div>
          <div className="text-[#AAAAAA] font-normal text-[10px]">
            {user.email}
          </div>
        </div>
      </div>
    </aside>
  );
}
