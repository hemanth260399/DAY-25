import { Link, Outlet } from 'react-router-dom'
import "./App.css"
import { useContext } from 'react'
import { Cartcontext } from './App'
const Topbutton = () => {
    const { add } = useContext(Cartcontext)
    return (
        <>
            <div className='header'>
                <Link to="/" style={{ color: "white", paddingLeft: 20 }}>Shopping Area </Link>
                <Link to="/cart" style={{ color: "white", paddingRight: 20 }}>Cart {add.length}</Link>
            </div>
            <Outlet />
        </>
    )
}
export default Topbutton;