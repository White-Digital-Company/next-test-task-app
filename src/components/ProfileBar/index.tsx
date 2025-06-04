import { mockData } from '@/mocks/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getNameWithSurnameInitial } from '@/utils/getNameWithSurnameInitial';
import { Button } from '../ui/button';
import { ProgressAvatar } from '../ProgressAvatar';

export default function ProfileBar() {
  const { user } = mockData;

  return (
    <aside className="hidden md:flex md:w-68 lg:w-80 bg-white p-7 flex-col justify-between min-h-screen">
      <div>
        <div className="text-xl font-medium mb-1">My Profile</div>
        <span className="text-sm font-normal mb-1 text-[#64C882]">
          {user.profileProgress}% completed your profile
        </span>
        <div className="flex flex-col justify-center items-center border-b border-[#F5F6FA]">
          <div className="pt-9 pb-4">
            <ProgressAvatar
              avatarUrl={user.avatarUrl}
              progress={user.profileProgress}
            />
          </div>
          <span className="text-base font-medium pb-2">
            {getNameWithSurnameInitial(user.fullName)}
          </span>
          <span className="text-sm font-normal text-[#AAAAAA] pb-3">
            {user.position}
          </span>
        </div>
      </div>
      <Button className="text-sm bg-[#D23D3D] hover:bg-[#9e4242] rounded-[4px]">
        Logout
      </Button>
    </aside>
  );
}
