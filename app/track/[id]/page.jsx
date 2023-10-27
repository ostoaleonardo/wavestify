'use client'

import { useEffect, useState } from 'react'
import { HeaderTrack } from '../HeaderTrack'
import { InfoTrack } from '../InfoTrack'
import { Features } from '../Features'
import { RelatedTracks } from '../RelatedTracks'
import getTrackById from '@/api/getTrackById'
import getFeaturesById from '@/api/getFeaturesById'
import getRelatedTracksById from '@/api/getRelatedTracksById'

export default function TrackDetails({ params }) {
    const { id } = params
    const [track, setTrack] = useState([])
    const [features, setFeatures] = useState([])
    const [relatedTracks, setRelatedTracks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const track = await getTrackById(id)
            const features = await getFeaturesById(id)
            const relatedTracks = await getRelatedTracksById(track.artists[0].id, id)

            setTrack(track)
            setFeatures(features)
            setRelatedTracks(relatedTracks)
        }

        fetchData()
    }, [id])

    return (
        <main className='w-full min-h-screen flex flex-col items-center'>
            <HeaderTrack track={track} />
            <InfoTrack track={track} />
            <Features features={features} />
            <RelatedTracks tracks={relatedTracks} />
        </main>
    )
}
