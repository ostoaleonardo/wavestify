'use client'

import { useEffect, useState } from 'react'
import { Card, CardBody } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Progress, CircularProgress } from '@nextui-org/progress'
import { Image } from '@nextui-org/image'
import { Chip } from '@nextui-org/chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faCircle, faForwardStep, faHeart, faPause, faRepeat } from '@fortawesome/free-solid-svg-icons'
import getCurrentlyPlaying from '../api/getCurrentlyPlaying'

export function CurrentlyPlaying() {
    const [progress, setProgress] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [timeElapsed, setTimeElapsed] = useState('0:00')
    const [leftBarProgress, setLeftBarProgress] = useState(0)
    const [currentlyPlaying, setCurrentlyPlaying] = useState({
        name: 'No song playing',
        artist: 'No artist',
    })

    useEffect(() => {
        pollCurrentlyPlaying()
    }, [])

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setProgress((v) => v + 1000)
                setTimeElapsed(getTime(progress))
                setLeftBarProgress((progress * 100) / currentlyPlaying.durationMs)
            }, 1000);
            return () => clearInterval(interval)
        }
    }, [progress])

    const pollCurrentlyPlaying = async () => {
        try {
            const response = await getCurrentlyPlaying()

            let timeLeft = null

            if (response) {
                setCurrentlyPlaying(response)
                const durationMn = getTime(response.durationMs)
                const progressMn = getTime(response.progressMs)
                setProgress(response.progressMs)
                setCurrentlyPlaying((v) => ({ ...v, durationMn, progressMn }))

                setIsPlaying(response.isPlaying)
                timeLeft = response.durationMs - response.progressMs
            }

            if (isPlaying === true) {
                setTimeout(pollCurrentlyPlaying, timeLeft)
            } else {
                setTimeout(pollCurrentlyPlaying, 5000)
            }
        } catch (error) {
            console.error('Error fetching currently playing:', error)
        }
    }

    const getTime = (ms) => {
        const minutes = Math.floor(ms / 60000)
        const seconds = ((ms % 60000) / 1000).toFixed(0)
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    }

    return (
        <Card className='shadow-none'>
            <CardBody>
                <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
                    <div className='flex justify-center col-span-6 md:col-span-4 aspect-square'>
                        {currentlyPlaying.image === undefined
                            ? <CircularProgress color='success' />
                            : <Image
                                isZoomed
                                width='100%'
                                height={200}
                                alt={currentlyPlaying.name}
                                src={currentlyPlaying.image}
                                className='object-cover aspect-square'
                            />
                        }
                    </div>

                    <div className='flex flex-col col-span-6 md:col-span-8'>
                        <div className='flex justify-between items-start'>
                            <div className='flex flex-col gap-0'>
                                <Chip
                                    startContent={<FontAwesomeIcon icon={faCircle} />}
                                    variant='flat'
                                    color={
                                        currentlyPlaying.isPlaying
                                            ? 'success'
                                            : currentlyPlaying.isPlaying === false
                                                ? 'warning'
                                                : 'danger'
                                    }
                                    className='font-medium pl-2'
                                >
                                    {currentlyPlaying.isPlaying
                                        ? 'Currently playing'
                                        : currentlyPlaying.isPlaying === false
                                            ? 'Paused'
                                            : 'You are offline'
                                    }
                                </Chip>
                                <p className='text-large font-medium line-clamp-1 mt-2'>{currentlyPlaying.name}</p>
                                <p className='text-small text-foreground/80 line-clamp-1'>{currentlyPlaying.artists}</p>
                            </div>
                            <Button
                                isIconOnly
                                radius='full'
                                variant='light'
                                aria-label='Like'
                                className='text-foreground-500 hover:bg-foreground-100 -translate-y-2 translate-x-2'
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </Button>
                        </div>

                        <div className='flex flex-col mt-3 gap-1'>
                            <Progress
                                aria-label='Music progress'
                                classNames={{
                                    indicator: 'bg-default-800 dark:bg-white',
                                    track: 'bg-default-500/30',
                                }}
                                color='default'
                                size='sm'
                                value={leftBarProgress}
                            />
                            <div className='flex justify-between'>
                                <p className='text-small'>{timeElapsed}</p>
                                <p className='text-small text-foreground/50'>{currentlyPlaying.durationMn}</p>
                            </div>
                        </div>

                        <div className='flex w-full items-center justify-center'>
                            <Button
                                isIconOnly
                                radius='full'
                                variant='light'
                                aria-label='Repeat'
                                className='hover:bg-foreground-100'
                            >
                                <FontAwesomeIcon icon={faRepeat} />
                            </Button>
                            <Button
                                isIconOnly
                                radius='full'
                                variant='light'
                                aria-label='Previous song'
                                className='hover:bg-foreground-100'
                            >
                                <FontAwesomeIcon icon={faBackwardStep} />
                            </Button>
                            <Button
                                isIconOnly
                                radius='full'
                                variant='light'
                                aria-label='Play'
                                className='hover:bg-foreground-100'
                            >
                                <FontAwesomeIcon icon={faPause} />
                            </Button>
                            <Button
                                isIconOnly
                                radius='full'
                                variant='light'
                                aria-label='Next song'
                                className='hover:bg-foreground-100'
                            >
                                <FontAwesomeIcon icon={faForwardStep} />
                            </Button>
                            <Button
                                isIconOnly
                                radius='full'
                                variant='light'
                                aria-label='Shuffle'
                                className='hover:bg-foreground-100'
                            >
                                <FontAwesomeIcon icon={faForwardStep} />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
