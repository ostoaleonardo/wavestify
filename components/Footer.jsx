import { Card, CardBody } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { accessUrl } from '../api/getAuthorization'

export function Footer() {
    return (
        <section className='w-full max-w-5xl md:max-w-5xl xl:max-w-7xl px-5 py-5 sm:px-0 sm:py-24'>
            <Card shadow='none' className='border-none'>
                <CardBody className='items-center p-10 sm:p-16'>
                    <h3 className='text-3xl sm:text-6xl font-bold text-center'>
                        Log in with <span className='text-guppie-green'>Spotify</span>
                    </h3>
                    <h3 className='text-3xl sm:text-6xl font-bold text-center'>
                        and get your <span className='text-guppie-green'>Music Stats</span>
                    </h3>
                    <span className='text-sm sm:text-lg text-foreground-500 text-center mt-5'>
                        Are you ready to get your music stats?
                    </span>
                    <Button
                        as={Link}
                        href={accessUrl}
                        size='lg'
                        color='success'
                        className='bg-guppie-green font-bold mt-8'
                        startContent={<FontAwesomeIcon className='w-5 h-5' icon={faSpotify} />}
                    >
                        Log in with Spotify
                    </Button>
                </CardBody>
            </Card>
        </section>
    )
}
