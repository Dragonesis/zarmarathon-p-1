/* eslint-disable camelcase */
import { typeBgCard } from '../types/typeBgCard'

export interface ISlug {
  id: string | number
}

export interface IPokemons {
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
