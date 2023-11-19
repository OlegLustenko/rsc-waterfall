'use client'

import React, { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'

export const LoadingTimer = () => {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [now, setNow] = useState<number | null>(null)
  const intervalRef = useRef<any>(null)

  useEffect(() => {
    setStartTime(Date.now())
    setNow(Date.now())

    intervalRef.current = setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now())
    }, 10)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
    </>
  )
}

export const Loading = ({
  speed,
  statIdx,
}: {
  speed: string
  statIdx: number
}) => {
  return (
    <div
      className={clsx(
        statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
        'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
      )}
    >
      <dt className="text-sm font-medium leading-6 text-gray-500">{speed}</dt>
      <dd className={clsx('text-xs font-medium text-gray-400')}>
        <LoadingDotsSmall />
      </dd>
      <dd className="w-52 flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
        <LoadingDots />
      </dd>
    </div>
  )
}

function LoadingDots() {
  return (
    <div>
      <span className="space-x-0.5">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full text-3xl">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full text-3xl">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full text-3xl">
          &bull;
        </span>
      </span>
    </div>
  )
}

function LoadingDotsSmall() {
  return (
    <div>
      <span className="space-x-0.5">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
          &bull;
        </span>
      </span>
    </div>
  )
}
