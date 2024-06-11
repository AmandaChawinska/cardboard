import { useEffect, useState } from 'react'

import { Board } from './Board'
import { Card } from '../Card/Card'

import { CardModel, CardModelData, findCards } from '../../data'
import { CardAddNew } from '../Card/CardAddNew'

const BoardContainer = () => {
  const [cards, setCards] = useState<CardModel[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await findCards()
        const mappedCards = cards.map((card) => new CardModel(card))
        setCards(mappedCards)
      } catch (error) {
        alert(
          'Ensure server is running. For more details, check project readme.'
        )
        setCards([])
      }
    }
    fetchCards()
  }, [])

  const handleAddNewCard = async () => {
    const newCard = new CardModel({
      id: Date.now(),
      content: '',
      createdAt: new Date().toISOString(),
    })

    try {
      setCards([...cards, newCard])
      await newCard.create()
    } catch (err) {
      const revertedCards = cards.filter((card) => card.id !== newCard.id)
      setCards(revertedCards)
    }
  }

  const handleUpdateCard = async (updatedCardData: CardModelData) => {
    try {
      const updatedCard = new CardModel(updatedCardData)
      setCards(
        cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
      )
      await updatedCard.update()
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteCard = async (deletedCardId: number) => {
    const cardToDelete = cards.find((card) => card.id === deletedCardId)
    if (!cardToDelete) return
    setCards(cards.filter((card) => card.id !== deletedCardId))
    await cardToDelete.delete()
  }

  return (
    <Board>
      {cards.map((cardProps) => (
        <Card
          key={cardProps.id}
          id={cardProps.id}
          content={cardProps.content}
          createdAt={cardProps.createdAt}
          onUpdateCard={handleUpdateCard}
          onDeleteCard={handleDeleteCard}
        />
      ))}
      <CardAddNew onAddCard={handleAddNewCard} />
    </Board>
  )
}

export default BoardContainer
