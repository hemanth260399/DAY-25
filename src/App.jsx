import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbutton from './Linkbutton.jsx'
import Productcard from './productlogarea.jsx'
import { createContext, useState } from 'react'
import bookdata from "./productdata.json"
import Cartdata from './Productcart.jsx'

const Cartcontext = createContext(null)
function App() {
  let [add, toadd] = useState([])
  let carincre = (value) => {
    let temp = [...add, value]
    toadd(temp)
  }
  let cardecre = (value) => {
    let temp = add.filter(c => c.id !== value)
    console.log(temp)
    toadd(temp)
  }

  return (
    <>
      <Cartcontext.Provider value={{ add, bookdata, carincre, cardecre }}>
        <BrowserRouter>
          <Routes >
            <Route element={<Topbutton />} >
              <Route path="/" element={<Productcard />} />
              <Route path="/cart" element={<Cartdata />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Cartcontext.Provider>
    </>
  )
}
export { Cartcontext };
export default App
