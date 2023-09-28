'use client'

import { NextUIProvider } from '@nextui-org/react'
import { CurrentUserProvider } from '@/context/currentUser'
import { TimeRangeProvider } from '@/context/timeRange'

export function Providers({ children }) {
    return (
        <NextUIProvider>
            <CurrentUserProvider>
                <TimeRangeProvider>
                    {children}
                </TimeRangeProvider>
            </CurrentUserProvider>
        </NextUIProvider>
    )
}