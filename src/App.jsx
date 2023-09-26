import './App.css'
import Card from './Card'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <div>
      <h1 className='text-4xl font-bold text-center my-9'>Course Registration</h1>
    </div>
    <Card></Card>
    <ToastContainer />
    </>
  )
}

export default App
