/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { Container } from '../../components/wrapper'
import { Heading, Loader } from '../../components/ui'
import { PokemonCard } from '../../components/common'
import s from './s.module.scss'

import { typeBgCard } from '../../types/typeBgCard'

interface IStats {
  hp: number
  attack: number
  defense: number
  'special-attack': number
  'special-defense': number
  speed: number
}
interface IPocemons {
  name_clean: string
  abilities: string[]
  types: typeBgCard[]
  stats: IStats
  img: string
  name: string
  base_experience: number
  height: number
  id: number
  is_default: boolean
  order: number
  weight: number
}
interface IData {
  total: number | '?'
  pokemons: IPocemons[]
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ total: '?', pokemons: [] })
  const [isLoading, setLoading] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true)
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons')
        const body = await response.json()
        setError(false)
        setTimeout(() => {
          setData(body)
        }, 1000)
      } catch (error) {
        setError(true)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }
    getPokemons()
  }, [])

  return {
    data,
    isLoading,
    isError,
  }
}

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons()

  if (isError) {
    return <Container> isError... </Container>
  }

  return (
    <div className={s.core}>
      <Container>
        <Heading tag='h1' size='size-h3' align='center'>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={s.cards}>
            {data.pokemons.map(({ name_clean, types, img, stats }) => (
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
    </div>
  )
}

export default Pokedex
