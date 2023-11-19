import { ReactNode } from 'react'

export default function Example({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="whitespace-nowrap py-10 text-center text-4xl">
          API SPEED
        </h1>
      </div>
      {children}
    </div>
  )
}
