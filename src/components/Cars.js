import React from 'react';

import {Car} from "./Car";

const Cars = ({cars,changeTrigger,setCarUpdate}) => {


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} changeTrigger={changeTrigger} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export {Cars};