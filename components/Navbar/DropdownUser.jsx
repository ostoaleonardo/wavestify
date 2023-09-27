'use client'

import { useRouter } from 'next/navigation'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import { Avatar } from '@nextui-org/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

export function DropdownUser() {
    const { currentUser } = useCurrentUser()
    const router = useRouter()

    const signOut = () => {
        localStorage.clear()
        router.push('/')
    }

    return (
        <Dropdown placement='bottom-end'>
            <DropdownTrigger>
                <Avatar
                    isBordered
                    size='sm'
                    as='button'
                    color='success'
                    src={currentUser.image}
                    className='aspect-square transition-transform'
                />
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='text-guppie-green font-semibold'>Logged in as</p>
                    <p className='font-semibold'>{currentUser.email}</p>
                </DropdownItem>
                <DropdownItem
                    key='logout'
                    color='danger'
                    onClick={signOut}
                    startContent={<FontAwesomeIcon icon={faSignOut} />}
                >
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
