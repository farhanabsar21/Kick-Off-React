import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import InfoDetail from '../InfoDetail/InfoDetail';
import "./LeagueDetails.css";

const LeagueDetails = () => {
    const { leagueId } = useParams();
    const [singleLeague, setSingleLeague] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleLeague(data.leagues))
    },[leagueId])
    return (
        <div>
            <Header></Header>
            {singleLeague.map(info => <InfoDetail info={info}></InfoDetail>)}
        </div>
    );
};

export default LeagueDetails;