import { type Metadata } from 'next'
import { Oswald, Fira_Code } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'

import './globals.css'
import React from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline'
import NodesProvider from '@/app/waterfall/providers'

export const metadata: Metadata = {
  title: {
    template: '%s - Native Frontend',
    default: 'Native Frontend',
  },
}

// If loading a variable font, you don't need to specify the font weight
const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

const fira_Code = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

const navigation = [
  {
    name: 'Fetch memo',
    href: '/fetch-memo',
    icon: HomeIcon,
  },
  { name: 'Waterfall', href: '/waterfall', icon: UsersIcon, current: true },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full antialiased',
        oswald.variable,
        fira_Code.variable,
        GeistSans.variable,
      )}
    >
      <body className="flex h-full min-h-screen flex-grow flex-col">
        <NodesProvider>
          <div className="flex min-h-screen bg-white">
            <div className="flex w-72 flex-col">
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-600 px-6">
                <div className="flex h-16 shrink-0 items-center" />
                <nav className="flex flex-1 flex-col">
                  <ul className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={clsx(
                                item.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {children}
          </div>
        </NodesProvider>
      </body>
    </html>
  )
}
