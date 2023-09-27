import { usePathname } from 'next/navigation'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { MenuToggle } from './MenuToggle'
import { DropdownUser } from './DropdownUser'
import { SpotifyButton } from '../SpotifyButton'
import { accessUrl } from '../../api/getAuthorization'
import Link from 'next/link'

const menuItems = [
    { name: 'Profile', href: '/home' },
    { name: 'Top', href: '/top' },
    { name: 'Recently played', href: '/recently' },
    { name: 'Log out', href: '/' },
]

export function NavigationBar() {
    const { currentUser } = useCurrentUser()
    const pathname = usePathname()

    const navbarItems = menuItems.slice(0, 3).map((item, index) => (
        <NavbarItem
            key={index}
            className={
                'font-semibold ' +
                (pathname === item.href ? 'text-guppie-green' : 'text-foreground-500')
            }
        >
            <Link href={item.href}>
                {item.name}
            </Link>
        </NavbarItem>
    ))

    const dropdownItems = menuItems.slice(0, 3).map((item, index) => (
        <NavbarMenuItem
            key={index}
            className={
                'font-semibold ' +
                (pathname === item.href ? 'text-guppie-green' : 'text-foreground-500')
            }
        >
            <Link href={item.href}>
                {item.name}
            </Link>
        </NavbarMenuItem>
    ))

    return (
        <Navbar maxWidth='xl' height={'6rem'} className={'bg-chinese-black'}>
            <NavbarContent>
                {currentUser &&
                    <MenuToggle />
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
                        <DropdownUser />
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
