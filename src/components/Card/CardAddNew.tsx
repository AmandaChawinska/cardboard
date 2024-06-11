import styles from './Card.module.css'
import { cx } from '../../utils/cx'

interface CardProps {
  disabled?: boolean
  onAddCard(): void
}

export const CardAddNew = (props: CardProps) => {
  const handleAddNewCard = () => {
    if (!props.disabled) {
      props.onAddCard()
    }
  }

  return (
    <button
      data-cy={`card-add-new`}
      disabled={props.disabled}
      className={cx(styles.card, styles.addBtn)}
      onClick={handleAddNewCard}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        name={'add-new-card-icon'}
      >
        <path
          d="M13.3333 7.99992H2.66663"
          stroke="#494455"
          strokeLinecap="round"
        />
        <path
          d="M8.00004 2.66675V13.3334"
          stroke="#494455"
          strokeLinecap="round"
        />
      </svg>
      <p>Add new card</p>
    </button>
  )
}
