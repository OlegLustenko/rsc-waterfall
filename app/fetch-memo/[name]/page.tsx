import React, { Suspense } from 'react'
import { pokemonApi } from '@/app/_api/pokemon.api'
import Image from 'next/image'
import Link from 'next/link'
import { Stats } from '@/app/fetch-memo/[name]/_stats'

const Page = async ({ params }: { params: { name: string } }) => {
  const pokemon = await pokemonApi.getPokemon(params.name)
  console.log('POKEMON HOME: ', pokemon.name)
  return (
    <main className="p-20">
      <Link href="/fetch-memo" className="text-blue-500">
        Go Back
      </Link>
      <div className="flex gap-10 pt-6">
        <div>
          <h1 className="text-7xl">{pokemon.name}</h1>
          <Image
            alt={pokemon.name}
            height={200}
            width={200}
            loading="eager"
            src={`http://localhost:3000/${pokemon.image}`}
          />
        </div>
        <Suspense fallback="LOADING">
          <Stats name={params.name} />
        </Suspense>
      </div>
      <div>
        <hr />
        <h1 className="text-7xl text-orange-600">Evolution</h1>
        <div className="grid grid-cols-3 gap-x-2 gap-y-2">
          {pokemon.evolutions.map((p) => {
            return (
              <div key={p.id} className="p-8">
                <Image
                  alt={p.name}
                  height={100}
                  width={100}
                  loading="eager"
                  src={`http://localhost:3000/${p.image}`}
                />
                <Link
                  href={`/fetch-memo/${p.name}`}
                  className="font-serif"
                  prefetch
                >
                  {p.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Page
