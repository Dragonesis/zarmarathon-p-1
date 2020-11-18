/* eslint-disable camelcase */
import React, { useState } from 'react'
import cc from 'classnames'
import { getData } from '../../hooks'
import { Container } from '../../components/wrapper'
import { Heading, Loader } from '../../components/ui'
import { PokemonCard } from '../../components/common'
import { typeBgCard } from '../../types/typeBgCard'

import s from './s.module.scss'
import errorImage from '../../assets/img/bad-pikachu.png'

interface IPokemons {
  name_clean: string
  abilities: string[]
  img: string
  name: string
  base_experience: number
  height: number
  id: number
  is_default: boolean
  order: number
  weight: number
  types: typeBgCard[]
  stats: {
    hp: number
    attack: number
    defense: number
    'special-attack': number
    'special-defense': number
    speed: number
  }
}

interface IDataPokemons {
  total: number | '?'
  pokemons: IPokemons[]
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('')
  const [query, setQuery] = useState({})
  const { data, isLoading, isError } = getData<IDataPokemons>('getPokemons', query, [searchValue])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setQuery((x) => ({
      ...x,
      name: e.target.value,
    }))
  }

  if (isError) {
    return (
      <Container className={s.core}>
        <Heading tag='h1' size='size-h3' align='center'>
          Something went wrong
        </Heading>
        <img src={errorImage} className={s.errorImg} alt='' />
      </Container>
    )
  }

  return (
    <Container className={s.core}>
      <Heading tag='h1' size='size-h3' align='center'>
        {data?.total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      <input type='text' value={searchValue} onChange={handleSearchChange} />
      {!data && isLoading && <Loader />}
      {!!data && (
        <div className={cc(s.cards, isLoading && s.overlay)}>
          {data?.pokemons.map(({ name_clean, types, img, stats }) => (
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
      )}
    </Container>
  )
}

export default Pokedex
