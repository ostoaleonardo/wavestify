import { Header } from '@/components/Header'
import { RecentlyPlayed } from '@/components/RecentlyPlayed'
import { CurrentlyPlaying } from '@/components/CurrentlyPlaying'
import { TopTrack } from '@/components/TopTrack'
import { TopTracks } from '@/components/TopTracks'
import { TopArtists } from '@/components/TopArtists'
import { TopGenres } from '@/components/TopGenres'

export default function Home() {
    return (
        <main className='w-full min-h-screen flex flex-col'>
            <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4'>
                <div className='col-span-full'>
                    <Header />
                </div>
                <RecentlyPlayed />
                <CurrentlyPlaying />
                <div className='col-span-full'>
                    <TopTrack />
                </div>
                <div className='col-span-full'>
                    <TopTracks />
                </div>
                <div className='col-span-full'>
                    <TopArtists />
                </div>
                <div className='col-span-full'>
                    <TopGenres />
                </div>
            </div>
        </main>
    )
}
