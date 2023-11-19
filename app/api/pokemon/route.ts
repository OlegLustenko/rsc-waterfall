import pokemons from '../_pokemons.json'
import { NextRequest, NextResponse } from 'next/server'

const sleep = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

export const GET = async (request: NextRequest) => {
  const pokemonName = await request.nextUrl.searchParams.get('name')
  const pokemon = pokemons.find((pokemon) => pokemon.name === pokemonName)

  await sleep(2000)

  if (!pokemon) {
    return NextResponse.error()
  }

  console.log('@@@@', pokemon.name)

  const lowCaseName = pokemon.name.toLowerCase()
  const evolutions = pokemons.filter((pokemonJSON) =>
    pokemonJSON.variations[0].evolutions.includes(lowCaseName),
  )

  const mappedPokemon = {
    id: pokemon.num,
    name: pokemon.name,
    image: pokemon.variations[0].image,
    stats: pokemon.variations[0].stats,
    evolutions: evolutions.map((pokemon) => ({
      id: pokemon.num,
      name: pokemon.name,
      image: pokemon.variations[0].image,
    })),
  }

  console.log('POKEMON API HIT')
  return NextResponse.json(mappedPokemon)
}
