import Link from 'next/link'
import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Link as NextLink } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { Chip } from '@nextui-org/chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faClock, faPlay } from '@fortawesome/free-solid-svg-icons'

export function TrackList({ index, track, chip }) {
    const [isHovered, setIsHovered] = useState([])

    const playPreview = (previewUrl) => {
        if (previewUrl === null) return
        const audio = new Audio(previewUrl)
        audio.play()
    }

    return (
        <Card
            radius='lg'
            className='flex flex-row shadow-none border-none'
            onMouseEnter={() => {
                if (track.previewUrl !== null) {
                    setIsHovered((prevIndex) => [...prevIndex, index])
                }
            }}
            onMouseLeave={() => {
                if (track.previewUrl !== null) {
                    setIsHovered((prevIndex) =>
                        prevIndex.filter((hoveredIndex) => hoveredIndex !== index)
                    )
                }
            }}
        >
            {index && (
                <CardHeader className='hidden w-14 sm:flex items-center justify-center mr-3'>
                    <span className={`text-lg font-bold ${isHovered.includes(index) ? 'hidden' : ''}`}>
                        {index}.
                    </span>
                    {track.previewUrl !== null && (
                        <Button
                            isIconOnly
                            showAnchorIcon
                            variant='light'
                            onClick={() => playPreview(track.previewUrl)}
                            className={`${isHovered.includes(index) ? '' : 'hidden'}`}
                        >
                            <FontAwesomeIcon icon={faPlay} />
                        </Button>
                    )}
                </CardHeader>
            )}
            <Link href={'/track/' + track.id} className='w-full flex bg-black/20 rounded-xl'>
                <CardBody className='flex flex-row grow items-center pr-0 gap-4'>
                    <Image
                        isZoomed
                        width={50}
                        height={50}
                        radius='sm'
                        alt={track.name}
                        src={track.image}
                        className='w-auto h-auto object-cover aspect-square'
                    />
                    <div className='flex flex-col grow'>
                        <span className='text-sm sm:text-lg font-semibold line-clamp-1'>
                            {track.name}
                        </span>
                        <span className='text-xs font-medium text-foreground-500 line-clamp-1'>
                            {track.artists}
                        </span>
                    </div>
                </CardBody>
                <CardFooter className='w-fit flex-none pl-0 gap-1'>
                    {chip && (
                        <Chip
                            variant='flat'
                            color='success'
                            className='hidden sm:flex text-xs sm:text-sm pl-2'
                            startContent={<FontAwesomeIcon icon={faClock} />}
                        >
                            {chip}
                        </Chip>
                    )}
                    <Button
                        isIconOnly
                        as={NextLink}
                        target='_blank'
                        variant='light'
                        href={track.url}
                    >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Button>
                </CardFooter>
            </Link>
        </Card>
    )
}
