'use client'

import { useState } from 'react'
import { useTimeRange } from '@/hooks/useTimeRange'
import { Button, ButtonGroup } from '@nextui-org/button'
import { ranges } from '../constants/lists'

export default function TimeRangeGroup() {
    const { timeRange, setTimeRange } = useTimeRange()

    return (
        <ButtonGroup>
            {ranges.map((range, index) => (
                <Button
                    key={index}
                    className={'font-medium bg-eerie-black' + (timeRange === range.value ? ' text-guppie-green bg-guppie-green/10' : '')}
                    onClick={() => setTimeRange(range.value)}
                >
                    {range.label}
                </Button>
            ))}
        </ButtonGroup>
    )
}