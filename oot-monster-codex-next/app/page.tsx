import React from 'react'
import Card from './_components/card'

export default async function Home() {

  return (
    <div className="flex flex-wrap justify-center">
      <Card
        name="Pikachu"
        type="Electric"
        description="Pikachu is a Electric-type Pokémon."
        image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
      />
      <Card
        name="Charizard"
        type="Fire/Flying"
        description="Charizard is a Fire/Flying-type Pokémon."
        image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
      />
      <Card
        name="Charizard"
        type="Fire/Flying"
        description="Charizard is a Fire/Flying-type Pokémon."
        image="/images/enemies/amy.png"
      />
    </div>
  )
}