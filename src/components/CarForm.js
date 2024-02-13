import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../services/carsService";

const CarForm = ({setCars,setTrigger,setCarUpdate,carUpdate}) => {

    const {register,handleSubmit,reset,formState: {isValid,errors},setValue} = useForm({mode:"all"})

    const save = (newCar) => {
        carsService.create(newCar).then( ({data})=> setCars(previous => [...previous,data]))
        changeTrigger()
        reset()
    }

    useEffect(() => {
        if (carUpdate) {
            setValue('id', carUpdate.id)
            setValue('brand', carUpdate.brand)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }
    }, [carUpdate]);



    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'id'} {...register('id')}/>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>

        </form>
    );
};

export {CarForm};