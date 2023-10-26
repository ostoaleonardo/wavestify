'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Landing } from '@/components/Landing'
import { Advantages } from '@/components/Advantages'
import { Footer } from '@/components/Footer'

export default function Login() {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const { access_token, token_type, expires_in } = getAccessToken(window.location.hash)
        if (access_token) {
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('token_type', token_type)
            localStorage.setItem('expires_in', expires_in)
            router.push('/home')
        }
    }, [pathname, router])

    const getAccessToken = (hash) => {
        const stringAfterHashtag = hash.substring(1)
        const paramsInUrl = stringAfterHashtag.split('&')
        const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
            const [key, value] = currentValue.split('=')
            accumulater[key] = value
            return accumulater
        }, {})
        return paramsSplitUp
    }

    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-between'>
            <Landing />
            <Advantages />
            <Footer />
        </main>
    )
}
