import { Card, CardBody } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { accessUrl } from '../api/getAuthorization'

export function Landing() {
    return (
        <section className='w-full max-w-5xl md:max-w-5xl xl:max-w-7xl px-5 py-5 sm:px-0 sm:py-24'>
            <Card shadow='none' className='w-fit border-none'>
                <CardBody className='p-10'>
                    <h1 className='text-4xl sm:text-6xl font-bold'>
                        Your <span className='text-guppie-green'>Music</span>
                        <br />
                        Your <span className='text-guppie-green'>Spotify</span>
                        <br />
                        Your <span className='text-guppie-green'>Stats</span>
                    </h1>
                    <p className='text-sm sm:text-lg text-foreground-500 mt-5'>
                        Get your top artists and tracks from Spotify
                    </p>
                    <p className='text-sm sm:text-lg text-foreground-500'>
                        and see your stats in a beautiful way
                    </p>
                    <Button
                        as={Link}
                        href={accessUrl}
                        size='lg'
                        color='success'
                        className='bg-guppie-green font-bold self-start mt-8'
                        startContent={<FontAwesomeIcon className='w-5 h-5' icon={faSpotify} />}
                    >
                        Log in with Spotify
                    </Button>
                </CardBody>
            </Card>
        </section>
    )
}
