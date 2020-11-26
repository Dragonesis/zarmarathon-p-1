/* eslint-disable camelcase */
import React, { useState } from 'react'
import cc from 'classnames'
import { getData, useDebounce } from '../../hooks'
import { Container } from '../../components/wrapper'
import { Heading, Loader } from '../../components/ui'
import { PokemonCard } from '../../components/common'
import { IPokemons } from '../../interface'
import s from './s.module.scss'
import errorImage from '../../assets/img/bad-pikachu.png'

interface IDataPokemons {
  total: number | '?'
  pokemons: IPokemons[]
}

interface IQuery {
  name?: string
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('')
  const [query, setQuery] = useState<IQuery>({})
  const debouncedValue = useDebounce(searchValue, 500)

  const { data, isLoading, isError } = getData<IDataPokemons>('getPokemons', query, [debouncedValue])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setQuery((state: IQuery) => ({
      ...state,
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
