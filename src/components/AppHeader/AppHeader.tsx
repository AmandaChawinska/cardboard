import { CardboardLogo } from '../Icons/CardboardLogo'

import styles from './AppHeader.module.css'

export const AppHeader = () => (
  <header className={styles.header}>
    <CardboardLogo />
    <p className={styles.description}>
      Daily stamps in time. Simplest online daily notes. Click on the card to
      add today’s note.
    </p>
  </header>
)
