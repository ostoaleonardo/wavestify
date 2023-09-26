'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import { Avatar } from '@nextui-org/avatar'
import { SpotifyButton } from './SpotifyButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { accessUrl } from '../api/getAuthorization'
import getCurrentUser from '@/api/getCurrentUser'
import Link from 'next/link'

const menuItems = [
    { name: 'Profile', href: '/home' },
    { name: 'Top', href: '/top' },
    { name: 'Recently played', href: '/recently' },
    { name: 'Log out', href: '/' },
]

export function NavigationBar() {
    const { currentUser } = useCurrentUser()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const signOut = () => {
        localStorage.clear()
        router.push('/')
    }

    const navbarItems = menuItems.slice(0, 3).map((item, index) => (
        <NavbarItem
            key={index}
            className={`font-semibold ${pathname === item.href ? 'text-guppie-green' : 'text-foreground-500'}`}
        >
            <Link href={item.href}>
                {item.name}
            </Link>
        </NavbarItem>
    ))

    const dropdownItems = menuItems.map((item, index) => (
        <NavbarMenuItem
            key={index}
            className={
                'font-semibold ' +
                (pathname === item.href ? 'text-guppie-green' : 'text-foreground-500') +
                (index === menuItems.length - 1 ? ' text-danger' : '')
            }
            onClick={index === menuItems.length - 1 ? signOut : undefined}
        >
            <Link href={item.href}>
                {item.name}
            </Link>
        </NavbarMenuItem>
    ))

    return (
        <Navbar maxWidth='xl' height={'6rem'} className={'bg-chinese-black'} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                {currentUser &&
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className='sm:hidden'
                    />
                }
                <NavbarBrand>
                    <FontAwesomeIcon
                        icon={faSpotify}
                        className='w-auto h-5 sm:h-7 text-guppie-green mr-3' />
                    <p className='hidden sm:flex text-xl font-semibold text-inherit'>Your Spotify Stats</p>
                </NavbarBrand>
            </NavbarContent>

            {currentUser &&
                <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                    {navbarItems}
                </NavbarContent>
            }

            <NavbarContent as='div' justify='end'>
                {currentUser ? (
                    <NavbarContent justify='end'>
                        {/* <SearchInput /> */}
                        <Dropdown placement='bottom-end'>
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    size='sm'
                                    as='button'
                                    color='success'
                                    src={currentUser.image}
                                    name={currentUser.display_name}
                                    className='aspect-square transition-transform'
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label='Profile Actions' variant='flat'>
                                <DropdownItem key='profile' className='h-14 gap-2'>
                                    <p className='text-guppie-green font-semibold'>Logged in as</p>
                                    <p className='font-semibold'>{currentUser.email}</p>
                                </DropdownItem>
                                <DropdownItem key='logout' color='danger' startContent={<FontAwesomeIcon icon={faSignOut} />} onClick={signOut}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent>
                ) : (
                    <SpotifyButton isFlat url={accessUrl} classNames='hidden sm:flex'>
                        Log in with Spotify
                    </SpotifyButton>
                )}
            </NavbarContent>

            {currentUser &&
                <NavbarMenu>
                    {dropdownItems}
                </NavbarMenu>
            }
        </Navbar>
    )
}
