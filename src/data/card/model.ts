import { addCard, deleteCard, updateCard } from './api'

export interface CardModelData {
  id: number
  content: string
  createdAt: string
}

export class CardModel {
  readonly id: number
  content: string
  readonly createdAt: string

  constructor(data: CardModelData) {
    this.id = data.id
    this.content = data.content
    this.createdAt = data.createdAt
  }

  async create() {
    await addCard(this.toData())
  }

  async update() {
    await updateCard(this.toData())
  }

  async delete() {
    await deleteCard(this.id)
  }

  toData(): CardModelData {
    return {
      id: this.id,
      content: this.content,
      createdAt: this.createdAt,
    }
  }
}
