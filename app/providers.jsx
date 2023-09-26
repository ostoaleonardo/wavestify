'use client'

import { NextUIProvider } from '@nextui-org/react'
import { CurrentUserProvider } from '@/context/currentUser'

export function Providers({ children }) {
    return (
        <NextUIProvider>
            <CurrentUserProvider>
                {children}
            </CurrentUserProvider>
        </NextUIProvider>
    )
}