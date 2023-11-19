'use client';

import { createContext, ReactNode, useContext, useState } from 'react'

interface NodesValue {
  nodes: string[]
  setNodes: (nodes: string[]) => void
}

const NodesContext = createContext<NodesValue | undefined>(undefined)

export default function NodesProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [state, setState] = useState<{ nodes: string[] }>({ nodes: [] })

  const setNodes = (newNodes: string[]) => setState({ nodes: newNodes })

  return (
    <NodesContext.Provider value={{ nodes: state.nodes, setNodes }}>
      {children}
    </NodesContext.Provider>
  )
}

export function useNodesContext() {
  const context = useContext(NodesContext)
  if (context === undefined) {
    throw new Error('useBackdropContext is being used outside the provider')
  }

  return context
}
