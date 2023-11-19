import React, { ReactNode, Suspense } from 'react'
import { clsx } from 'clsx'
import { Loading, LoadingTimer } from '@/app/waterfall/_loadingTimer'

const NestedTree = () => {
  return (
    <>
      <LoadingTimer />
      <VerySlow>
        <Suspense fallback={<Loading speed="SLOW" statIdx={1} />}>
          <Slow />
        </Suspense>
      </VerySlow>
    </>
  )
}

export const dynamic = 'force-dynamic'

const Root = async () => {
  api.slow()

  return (
    <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
      <dl className="grid max-w-7xl grid-cols-3">
        <div>
          <LoadingTimer />
          <Suspense
            fallback={
              <>
                <Loading speed="VERY SLOW" statIdx={3} />
                <Loading speed="SLOW" statIdx={2} />
              </>
            }
          >
            <NestedTree />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<Loading speed="MEDIUM" statIdx={1} />}>
            <Medium />
          </Suspense>
          <Suspense fallback={<Loading speed="FAST" statIdx={0} />}>
            <Fast />
          </Suspense>
        </div>
      </dl>
    </div>
  )
}

const Stats = ({
  stat,
}: {
  stat: {
    name: string
    changeType: string
    change: ReactNode
    value: string
    statIdx: number
  }
}) => {
  return (
    <div
      className={clsx(
        stat.statIdx % 2 === 1
          ? 'sm:border-l'
          : stat.statIdx === 2
            ? 'lg:border-l'
            : '',
        'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
      )}
    >
      <dt className="text-sm font-medium leading-6 text-gray-500">
        {stat.name}
      </dt>
      <dd
        className={clsx(
          stat.changeType === 'negative' ? 'text-green-500' : 'text-orange-400',
          'text-xs font-medium',
        )}
      >
        {stat.change}
      </dd>
      <dd className="w-52 flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
        {stat.value}
      </dd>
      <LoadingTimer />
    </div>
  )
}

const api = {
  slow: async () => {
    const data = await fetch('http://localhost:3000/api/services/slow')
    return data.json()
  },
  fast: () => {
    return fetch('http://localhost:3000/api/services/fast').then((data) =>
      data.json(),
    )
  },
  medium: () => {
    return fetch('http://localhost:3000/api/services/medium').then((data) =>
      data.json(),
    )
  },
  verySlow: () => {
    return fetch('http://localhost:3000/api/services/very-slow').then((data) =>
      data.json(),
    )
  },
}

const Slow = async ({ children }: { children?: ReactNode }) => {
  const stat = await api.slow()

  return (
    <>
      <Stats stat={stat} />
      {children}
    </>
  )
}

const Fast = async ({ children }: { children?: ReactNode }) => {
  const stat = await api.fast()

  return (
    <>
      <Stats stat={stat} />
      {children}
    </>
  )
}

const Medium = async ({ children }: { children?: ReactNode }) => {
  const stat = await api.medium()

  return (
    <>
      <Stats stat={stat} />
      {children}
    </>
  )
}

const VerySlow = async ({ children }: { children?: ReactNode }) => {
  const stat = await api.verySlow()

  return (
    <>
      <Stats stat={stat} />
      {children}
    </>
  )
}

export default Root
