import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ProgressAvatarProps {
  avatarUrl?: string;
  progress: number;
}

export const ProgressAvatar = ({
  avatarUrl,
  progress,
}: ProgressAvatarProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = ((100 - progress) / 100) * circumference;

  return (
    <div className="relative w-28 h-28">
      <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#64C882"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Avatar className="w-20 h-20">
          <AvatarImage src={avatarUrl} alt="User avatar" />
          <AvatarFallback className="bg-[#C4C4C4] text-white text-lg" />
        </Avatar>
      </div>
    </div>
  );
};
