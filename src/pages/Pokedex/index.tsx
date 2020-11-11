/* eslint-disable camelcase */
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
          {pokemons.map(({ name_clean, types, img, stats }) => (
            <PokemonCard
              key={name_clean}
              className={s.card}
              name={name_clean}
              types={types}
              img={img}
              attack={stats.attack}
              defense={stats.defense}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Pokedex
