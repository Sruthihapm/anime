import { Route, BrowserRouter, Routes } from 'react-router-dom'; // Updated import statement

import Rootlayout from './Layout/Rootlayout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import TodoList from './Components/ToDoList';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      <Routes> {/* Use Routes component */}
        <Route path='/' element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='ToDoList' element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;