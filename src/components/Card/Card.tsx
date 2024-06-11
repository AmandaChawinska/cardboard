import { useRef, useState } from 'react'

import { CardContentForm } from './card-elements/CardContentForm'

import { useOutsideClick } from '../../hooks/useOutsideClick'

import styles from './Card.module.css'
import { CardModelData } from '../../data'
import { formatDate } from '../../utils/dates'

interface CardProps extends CardModelData {
  onUpdateCard?(updatedCard: CardModelData): void
  onDeleteCard?(cardId: number): void
}

export const Card = (props: CardProps) => {
  const ref = useRef(null)
  const [isEditing, setEditing] = useState(false)

  const handleSetEditingOff = () => {
    setEditing(false)
  }

  useOutsideClick(ref, handleSetEditingOff)

  const handleSetEditingOn = () => {
    setEditing(true)
  }

  const handleSaveContent = (values: CardModelData) => {
    props.onUpdateCard && props.onUpdateCard(values)
    handleSetEditingOff()
  }

  return (
    <div
      data-cy={`card-${props.id}`}
      className={styles.card}
      onClick={handleSetEditingOn}
    >
      <p className={styles.date}>
        {props.createdAt ? formatDate(props.createdAt) : 'Date'}
      </p>
      {!isEditing ? (
        <p>{props?.content || 'Click to start noting'}</p>
      ) : (
        <CardContentForm
          initialValues={props}
          onSubmit={handleSaveContent}
          onDeleteCard={props.onDeleteCard}
        />
      )}
    </div>
  )
}
