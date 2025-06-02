export default function RightSidebar() {
    return (
        <div className="hidden md:flex w-full max-w-[280px] bg-white border-l border-gray-200 flex-col justify-between px-6 py-8">
            <div>
                <h3 className="text-[16px] font-medium text-[#121212] mb-2">My Profile</h3>
                <p className="text-[12px] text-[#64C882] mb-6">75% completed your profile</p>

                <div className="flex flex-col items-center text-center">
                    <div className="relative w-[80px] h-[80px] mb-3">
                        <svg className="absolute top-0 left-0" width="80" height="80">
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="#E5E5E5"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="#64C882"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray="226"
                                strokeDashoffset="56"
                                strokeLinecap="round"
                                transform="rotate(-90 40 40)"
                            />
                        </svg>
                        <div className="w-[80px] h-[80px] rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                            {/* Placeholder avatar */}
                            <span className="text-[12px] font-semibold">User R.</span>
                        </div>
                    </div>

                    <p className="text-[14px] font-medium text-[#121212]">User R.</p>
                    <p className="text-[12px] text-[#666666]">Developer at White Digital</p>
                </div>
            </div>
            <div>
                <button className="w-full bg-[#E15050] hover:bg-[#c63f3f] text-white text-[14px] font-medium py-2 rounded-sm">
                    Logout
                </button>
            </div>
        </div>
    );
}
