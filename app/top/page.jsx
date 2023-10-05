import { Tabs, Tab } from '@nextui-org/tabs'
import { TopTracks } from '@/components/TopTracks'
import { TopArtists } from '@/components/TopArtists'

export default function Top() {
    return (
        <main className='w-full min-h-screen flex flex-col items-center p-6'>
            <div className='w-full max-w-5xl md:max-w-5xl xl:max-w-7xl gap-2 md:gap-4'>
                <Tabs aria-label='Options' color='success' variant='underlined' className='w-full font-semibold'>
                    <Tab key='photos' title='Songs' className='text-base'>
                        <TopTracks />
                    </Tab>
                    <Tab key='music' title='Artists' className='text-base'>
                        <TopArtists />
                    </Tab>
                </Tabs>
            </div>
        </main>
    )
}
