import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
export const GET = async () => {
  await sleep(1000)

  return NextResponse.json({
    name: 'MEDIUM',
    value: '$30,156.00',
    change: '+10.18%',
    changeType: 'negative',
    statIdx: 2,
  })
}
