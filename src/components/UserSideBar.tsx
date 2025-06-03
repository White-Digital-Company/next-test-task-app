import AvatarProgress from '@/components/AvatarProgress';
import React from 'react';

export default function RightSidebar() {
    return (
        <div className="hidden md:flex w-full max-w-[280px] bg-white border-l border-gray-200 flex-col justify-between px-6 py-8">
            <div>
                <h3 className="text-[16px] font-medium text-textBlack mb-2">My Profile</h3>
                <p className="text-[12px] text-primaryGreen mb-6">75% completed your profile</p>

                <div className="flex flex-col items-center text-center">
                    <div className="relative w-[80px] h-[80px] mb-3">
                        <AvatarProgress size={80} progress={75} />
                        <div className="w-[80px] h-[80px] rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                            {/* Placeholder avatar */}
                            <span className="text-[12px] font-semibold">User R.</span>
                        </div>
                    </div>

                    <p className="text-[14px] font-medium text-textBlack">User R.</p>
                    <p className="text-[12px] text-textGray">Developer at White Digital</p>
                </div>
            </div>
            <div>
                <button className="w-full bg-bgRed hover:bg-bgHoverRed text-white text-[14px] font-medium py-2 rounded-sm">
                    Logout
                </button>
            </div>
        </div>
    );
}
