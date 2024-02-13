import React, {useEffect, useState} from 'react';
import {CarForm} from "./CarForm";

import {Cars} from "./Cars";
import {carsService} from "../services/carsService";


const CarsContainer = () => {

    const [cars, setCars] = useState([])
    const [carUpdate,setCarUpdate] = useState(null)
    const [trigger, setTrigger] = useState(null)


    const changeTrigger = () => {
        setTrigger(prev=> !prev)
    }



    useEffect(() => {
        carsService.getAll().then(({data})=>setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarForm changeTrigger={changeTrigger} setCarUpdate={setCarUpdate} carUpdate={carUpdate} setCars={setCars} setTrigger={setTrigger}/>
            <hr/>
            <Cars cars={cars} changeTrigger={changeTrigger} setCarUpdate={setCarUpdate}/>
        </div>
    );
};

export {CarsContainer};