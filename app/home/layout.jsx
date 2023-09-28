import TimeRangeGroup from '@/components/TimeRangeGroup'

export default function HomeLayout({ children }) {
    return (
        <div className='w-full flex flex-col items-center px-6 py-2 sm:p-6'>
            <div className='w-full h-full flex flex-col items-end max-w-5xl md:max-w-5xl xl:max-w-7xl gap-4'>
                <TimeRangeGroup />
                {children}
            </div>
        </div>
    )
}