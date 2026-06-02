import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'

function App() {
  return (
    <>
      <h1>React State</h1>
      <Counter /> <br />
      <LikeButton />
      <hr />
      <LudoBoard />
      <hr />
      <TodoList />
      <hr />
      <Lottery n={3} winningSum={15} />
      {/* <Ticket ticket={[0, 1, 2]} /> */}
    </>
  )
}

export default App
