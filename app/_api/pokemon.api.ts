interface Pokemon {
  id: number
  name: string
  image: string
}

export const pokemonApi = {
  getPokemons: async (): Promise<Pokemon[]> => {
    const resp = await fetch('http://localhost:3000/api/pokemons')
    return resp.json()
  },
  getPokemon: async (
    name: string,
  ): Promise<{
    id: number
    name: string
    image: string
    stats: {
      total: number
      hp: number
      attack: number
      defense: number
      speedAttack: number
      speedDefense: number
      speed: number
    }
    evolutions: Pokemon[]
  }> => {
    const resp = await fetch('http://localhost:3000/api/pokemon?name=' + name, {
      cache: 'no-cache',
    })
    return resp.json()
  },
}
