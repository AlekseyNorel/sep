import React from 'react';
import {carsService} from "../services/carsService";

const Car = ({car,changeTrigger,setCarUpdate}) => {
    const {id,brand,price,year}=car

    const deleteCAr = async () => {
        await carsService.deleteById(id)
        changeTrigger()

    }



    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarUpdate(car)}>update</button>
            <button onClick={deleteCAr}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};