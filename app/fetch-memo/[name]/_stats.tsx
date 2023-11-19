import React from 'react'
import { pokemonApi } from '@/app/_api/pokemon.api'

export const Stats = async ({ name }: { name: string }) => {
  const pokemon = await pokemonApi.getPokemon(name)

  return (
    <section>
      <h3 className="text-4xl text-cyan-800">Stats</h3>
      <p>attack: {pokemon.stats.attack}</p>
      <p>hp: {pokemon.stats.hp}</p>
      <p>speedAttack: {pokemon.stats.speedAttack}</p>
      <p>speedDefense: {pokemon.stats.speedDefense}</p>
      <hr />
      <p>total: {pokemon.stats.total}</p>
    </section>
  )
}
