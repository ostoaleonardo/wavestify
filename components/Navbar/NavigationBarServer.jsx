'use client'

import { useEffect } from 'react'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { NavigationBar } from './NavigationBar'
import getCurrentUser from '@/api/getCurrentUser'

const fetchUser = async () => {
    const user = await getCurrentUser()
    return user
}

export function NavigationBarServer() {
    const { setCurrentUser } = useCurrentUser()

    useEffect(() => {
        const getUser = async () => {
            const user = await fetchUser()
            setCurrentUser(user)
        }

        getUser()
    }, []);

    return <NavigationBar />
}
