import pokemons from '../_pokemons.json'
import { NextResponse } from 'next/server'

export const GET = () => {
  return NextResponse.json(
    pokemons.map((pokemon) => ({
      id: pokemon.num,
      name: pokemon.name,
      image: pokemon.variations[0].image,
    })),
  )
}
