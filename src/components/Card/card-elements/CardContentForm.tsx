import { useInput } from '../../../hooks/useInput'

import { CardModelData } from '../../../data'
import styles from './CardContentForm.module.css'

interface CardContentFormProps {
  initialValues: CardModelData
  onSubmit(values: CardModelData): void
  onDeleteCard?(cardId: number): void
}

export const CardContentForm = (props: CardContentFormProps) => {
  const { value, handleChange } = useInput(props.initialValues.content)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    props.onSubmit({ ...props.initialValues, content: value })
  }

  const handleDeleteOnBackspace = (event: React.KeyboardEvent) => {
    if (event.key === 'Backspace' && value === '') {
      props.onDeleteCard && props.onDeleteCard(props.initialValues.id)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        autoFocus
        placeholder={'Start typing or press Backspace to delete this card'}
        value={value}
        onKeyDown={handleDeleteOnBackspace}
        onBlur={handleSubmit}
        onChange={handleChange}
      />
    </form>
  )
}
