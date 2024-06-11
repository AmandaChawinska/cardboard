import { PropsWithChildren } from 'react'

import styles from './AppLayout.module.css'

export const AppLayout = (props: PropsWithChildren<{}>) => (
  <div className={styles.layout}>{props.children}</div>
)
