import React from 'react';

interface AvatarProgressProps {
    size?: number;
    progress: number;
    strokeWidth?: number;
    bgColor?: string;
    progressColor?: string;
    trackColor?: string;
}

export default function AvatarProgress({
    size = 80,
    progress,
    strokeWidth = 8,
    progressColor = '#64C882',
    trackColor = '#E5E5E5',
}: AvatarProgressProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - progress / 100);

    return (
        <svg width={size} height={size} className="absolute top-0 left-0">
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={trackColor}
                strokeWidth={strokeWidth}
                fill="none"
            />
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={progressColor}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
        </svg>
    );
}
