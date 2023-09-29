import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { LinkButton } from '../LinkButton'
import { Background } from './Background'

export function TopItemCard({ children, title, url }) {
    return (
        <Card className='relative shadow-none flex flex-col sm:flex-row'>
            <CardHeader className='w-full sm:w-fit flex-1 justify-start p-5'>
                {children}
            </CardHeader>
            <CardBody className='w-full h-full absolute flex justify-center overflow-hidden p-0'>
                <Background title={title} />
                {url && <LinkButton url={url} />}
            </CardBody>
        </Card>
    )
}
