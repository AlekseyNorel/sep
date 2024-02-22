import React, {useEffect, useState} from 'react';

import {episodesService} from "../../../services";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'
import {useSearchParams} from "react-router-dom";
import {usePageQuery} from "../../../hooks";

const Episodes = () => {
    const [episodes, setEpisodes] = useState({prev: null, next: null, results: []})
    const {page, nextPage, prevPage} = usePageQuery();

    useEffect(() => {
        episodesService.getAll(page).then(({data}) => setEpisodes(() => {
            const {info: {next, prev}, results} = data;
            return {
                next,
                prev,
                results
            }
        }))
    }, [page]);

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.results.map(value => <Episode key={value.id} episode={value}/>)}
            </div>
            <div className={css.prevNextPage}>
                <button disabled={!episodes.prev} onClick={prevPage}>Previous page</button>
                <button disabled={!episodes.next} onClick={nextPage}>Next page</button>
            </div>
        </div>
    );
};

export {Episodes};