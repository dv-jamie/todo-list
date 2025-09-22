import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TodoPage from './TodoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
