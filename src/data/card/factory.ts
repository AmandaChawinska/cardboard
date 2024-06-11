import { generateId } from '../../utils/generators'
import { CardModelData } from './model'

export const createCard = (data?: Partial<CardModelData>): CardModelData => {
  return {
    id: generateId(),
    content: data?.content || '',
    createdAt: data?.createdAt || new Date().toISOString(),
  }
}

export const createManyCards = (
  amount: number,
  data?: Partial<CardModelData>
) => {
  return [...new Array(amount)].map((_card) => {
    return createCard(data)
  })
}
