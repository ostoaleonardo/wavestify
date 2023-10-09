'use client'

import { useTimeRange } from '@/hooks/useTimeRange'
import { Button, ButtonGroup } from '@nextui-org/button'
import { ranges } from '../constants/lists'

export function TimeRangeGroup() {
    const { timeRange, setTimeRange } = useTimeRange()

    return (
        <ButtonGroup>
            {ranges.map((range, index) => (
                <Button
                    key={index}
                    className={'font-medium bg-chinese-black ' + (timeRange === range.value ? 'text-guppie-green bg-guppie-green/10' : 'hover:text-foreground-500 transition-all')}
                    onClick={() => setTimeRange(range.value)}
                >
                    {range.label}
                </Button>
            ))}
        </ButtonGroup>
    )
}