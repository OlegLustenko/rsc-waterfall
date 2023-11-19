'use client'

import React, { ReactNode, useEffect } from 'react'
import { useNodesContext } from '@/app/waterfall/providers'

const createObserver = (nodes) => {
  const target = document.querySelector('#to-be-removed')
  return new MutationObserver(function (mutations) {
    // check for removed target
    mutations.forEach(function (mutation) {
      const nodes = Array.from(mutation.removedNodes)
      const directMatch = nodes.indexOf(target) > -1
      const parentMatch = nodes.some((parent) => parent.contains(target))
      if (directMatch) {
        console.log('node', target, 'was directly removed!')
      } else if (parentMatch) {
        console.log('node', target, 'was removed through a removed parent!')
      }
    })
  })
}

type TemplateProps = {
  children: ReactNode
}

const Template = ({ children }: TemplateProps) => {
  const nodesContext = useNodesContext()

  useEffect(() => {
    observer.observe(document.body, {
      subtree: true,
      childList: true,
    })
  }, [])
  return (
    <div>
      <h1 className="whitespace-nowrap py-10 text-center text-4xl"></h1>
      {children}
    </div>
  )
}

export default Template
