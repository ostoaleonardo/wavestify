'use client'

import { useState } from 'react'
import { NavbarMenuToggle } from '@nextui-org/navbar'

export function MenuToggle() {
    const [isMenuOpen] = useState(false)

    return (
        <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
        />
    )
}
