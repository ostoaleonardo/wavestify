'use client'

import { useEffect, useState } from 'react'
import { HeaderArtist } from '../HeaderArtist'
import { InfoArtist } from '../InfoArtist'
import { TopTracksById } from '../TopTracksById'
import { RelatedArtists } from '../RelatedArtists'
import getArtistById from '@/api/getArtistById'
import getTopTracksById from '@/api/getTopTracksById'
import getRelatedArtistById from '@/api/getRelatedArtistById'

export default function ArtistDetails({ params }) {
    const { id } = params
    const [artist, setArtist] = useState([])
    const [topTracks, setTopTracks] = useState([])
    const [relatedArtists, setRelatedArtists] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const artist = await getArtistById(id)
            const topTracks = await getTopTracksById(id)
            const relatedArtists = await getRelatedArtistById(id)

            setArtist(artist)
            setTopTracks(topTracks)
            setRelatedArtists(relatedArtists)
        }
        
        fetchData()
    }, [id])

    return (
        <main className='w-full min-h-screen flex flex-col items-center'>
            <HeaderArtist artist={artist} />
            <InfoArtist artist={artist} />
            <TopTracksById tracks={topTracks} />
            <RelatedArtists artists={relatedArtists} />
        </main>
    )
}
