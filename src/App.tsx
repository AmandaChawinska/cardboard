import { AppLayout } from './components/AppLayout/AppLayout'
import { AppHeader } from './components/AppHeader/AppHeader'
import Board from './components/Board/Board.container'

import './theme/global.css'

const App = () => (
  <AppLayout>
    <AppHeader />
    <Board />
  </AppLayout>
)

export default App
