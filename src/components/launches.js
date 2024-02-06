import React, {useEffect, useState} from 'react';
import {launchesService} from "../services/launchesService";
import {Launch} from "./Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        launchesService.getAll().then(({data})=>{
            const filteredLaunches = data.filter(item => item.launch_year !== '2020');
            setLaunches(filteredLaunches)})
    }, []);
    
    return (
        <div>
            {launches.map(launch => <Launch key={launch.launch_date_utc} launch={launch}/>)}
        </div>
    );
};

export {Launches};