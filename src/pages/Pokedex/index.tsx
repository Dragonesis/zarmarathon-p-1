import React from 'react'
import { Container } from '../../components/wrapper'
import { Heading } from '../../components/ui'
import { PokemonCard } from '../../components/common'
import { pokemons } from './mock'

import s from './s.module.scss'

const Pokedex = () => {
  return (
    <div className={s.core}>
      <Container>
        <Heading tag='h1' size='size-h3' align='center'>
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.cards}>
          {pokemons.map((item) => (
            <PokemonCard
              key={item.name_clean}
              className={s.card}
              name={item.name_clean}
              types={item.types}
              img={item.img}
              attack={item.stats.attack}
              defense={item.stats.defense}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Pokedex
