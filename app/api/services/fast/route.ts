import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
export const GET = async () => {
  await sleep(500)

  return NextResponse.json({
    name: 'FAST',
    value: '$50,091.00',
    change: '+4.75%',
    changeType: 'positive',
    statIdx: 1,
  })
}
