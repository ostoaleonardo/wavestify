'use client'

import { useEffect, useState } from 'react'
import { HeaderArtist } from '../HeaderArtist'
import getArtistById from '@/api/getArtistById'
import getTopTracksById from '@/api/getTopTracksById'
import getRelatedArtistById from '@/api/getRelatedArtistById'
import { InfoArtist } from '../InfoArtist'
import Top from '@/app/top/page'
import { TopTracksById } from '../TopTracksById'
import { RelatedArtists } from '../RelatedArtists'

export default function ArtistDetails({ params }) {
    const { id } = params
    const [artist, setArtist] = useState([])
    const [topTracks, setTopTracks] = useState([])
    const [relatedArtists, setRelatedArtists] = useState([])

    useEffect(() => {
        fetchData()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [id])

    const fetchData = async () => {
        const artist = await getArtistById(id)
        const topTracks = await getTopTracksById(id)
        const relatedArtists = await getRelatedArtistById(id)

        setArtist(artist)
        setTopTracks(topTracks)
        setRelatedArtists(relatedArtists)
    }

    return (
        <main className='w-full min-h-screen flex flex-col items-center'>
            <HeaderArtist artist={artist} />
            <InfoArtist artist={artist} />
            <TopTracksById tracks={topTracks} />
            <RelatedArtists artists={relatedArtists} />
        </main>
    )
}
