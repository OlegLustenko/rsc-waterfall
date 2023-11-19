import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
export const GET = async () => {
  await sleep(18000)

  console.log('VERY-SLOW API HIT')

  return NextResponse.json({
    name: 'VERY SLOW',
    value: '$85,988.00',
    change: '-1.39%',
    changeType: 'positive',
    statIdx: 4,
  })
}
