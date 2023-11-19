import React from 'react'
import { pokemonApi } from '@/app/_api/pokemon.api'
import Image from 'next/image'
import Link from 'next/link'

const Page = async () => {
  const pokemons = await pokemonApi.getPokemons()

  return (
    <main className="grid grid-cols-3 gap-x-2 gap-y-2">
      {pokemons.map((p) => (
        <div key={p.id} className="p-8">
          <Image
            alt={p.name}
            height={100}
            width={100}
            src={`http://localhost:3000/${p.image}`}
          />
          <Link
            href={`/fetch-memo/${p.name}`}
            className="text-blue-700 underline"
            prefetch
          >
            {p.name}
          </Link>
        </div>
      ))}
    </main>
  )
}

export default Page
