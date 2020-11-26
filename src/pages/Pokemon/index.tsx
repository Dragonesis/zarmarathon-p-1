import React, { FC } from 'react'
import { Container } from '../../components/wrapper'
import { Heading, Loader } from '../../components/ui'
import { getData } from '../../hooks'
import { toCapitalizeFirstLetter } from '../../utils'
import { ISlug, IPokemons } from '../../interface'
import s from './s.module.scss'

export interface Props extends ISlug {}

const Pokemon: FC<Props> = ({ id }) => {
  const { data, isLoading } = getData<IPokemons>('getPokemon', { id })

  return (
    <div className={s.core}>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <Heading tag='h1' size='size-h1'>
            {toCapitalizeFirstLetter(data?.name)}
          </Heading>
        )}
      </Container>
    </div>
  )
}

export default Pokemon
