'use client'

import { Tabs, Tab } from '@nextui-org/tabs'
import { TopTracks } from '@/components/TopTracks'
import { TopArtists } from '@/components/TopArtists'

export function TopTabs() {
    const clasNames = {
        tab: 'h-10',
        cursor: 'w-full bg-guppie-green/10 rounded-xl',
        tabContent: 'text-sm text-white font-medium group-data-[selected=true]:text-guppie-green',
    }
    
    return (
        <Tabs aria-label='Options' color='success' variant='light' classNames={clasNames}>
            <Tab key='photos' title='Tracks'>
                <TopTracks />
            </Tab>
            <Tab key='music' title='Artists'>
                <TopArtists />
            </Tab>
        </Tabs>
    )
}