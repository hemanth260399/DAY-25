import { useContext } from "react";
import Productcard from "./Productcard"
import { Cartcontext } from "./App";
const Productdata = () => {
    const { bookdata, add } = useContext(Cartcontext)
    return (
        <>
            {bookdata.map((data) => (
                <Productcard
                    key={data.id}
                    {...data}
                    available={Boolean(add.find((d) => data.id === d.id))}
                />
            ))}
        </>
    )
}

export default Productdata;