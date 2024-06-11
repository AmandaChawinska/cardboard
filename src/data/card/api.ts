import { CardDto } from './dto'

import { del, get, post, put } from '../../api/requests'
import { CardModelData } from './model'

const BASE_PATH = '/cards'

export const findCards = async (): Promise<CardDto[]> =>
  get<CardDto[]>(BASE_PATH)

export const addCard = async (card: CardModelData): Promise<CardDto> =>
  post<CardModelData, CardDto>(BASE_PATH, card)

export const updateCard = async (card: CardModelData): Promise<CardDto> =>
  put<CardModelData, CardDto>(BASE_PATH + '/' + card.id, card)

export const deleteCard = async (cardId: number): Promise<CardDto> =>
  del(BASE_PATH + '/' + cardId)
