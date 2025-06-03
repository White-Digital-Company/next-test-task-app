'use client';

import React, { useMemo } from 'react';
import { getCurrentWeekdayAndDate } from '@/utils/date';

export default function DateDisplay() {
    const { weekday, formattedDate } = useMemo(() => getCurrentWeekdayAndDate(), []);

    return (
        <p className="text-[14px]">
            <span className="text-green-500">{weekday},</span>{' '}
            <span className="text-textLightGray">{formattedDate}</span>
        </p>
    );
}
