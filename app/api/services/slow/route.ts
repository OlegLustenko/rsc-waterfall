import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
export const GET = async () => {
  await sleep(3000)

  console.log('SLOW API HIT')

  return NextResponse.json({
    name: 'SLOW',
    value: '$12,787.00',
    change: '+54.02%',
    changeType: 'negative',
    statIdx: 3,
  })
}
