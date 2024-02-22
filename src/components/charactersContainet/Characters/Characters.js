import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {charactersService} from "../../../services";
import {Character} from "../Character";
import css from './Characters.module.css'

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {ids} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        charactersService.getByEpisode(ids).then(({data}) => setCharacters(data))
    }, [ids]);
    return (
        <div className={css.wrap}>
            <button className={css.btn} onClick={() => navigate(-1)}>back</button>
            <div className={css.Characters}>
                {characters.map(value => <Character key={value.id} character={value}/>)}
            </div>
        </div>
    );
};

export {Characters};