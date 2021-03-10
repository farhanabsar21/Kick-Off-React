import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';
import "./Home.css";

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(()=>{
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues));
    }, [])
    return (
        <div className="Home">
            <Header></Header>
            <h2>Most Popular Leagues in Europe</h2>
            <div className="display-contents">
                {leagues.map(league => <League league={league}></League>).slice(0,15)}
            </div>
        </div>
    );
};

export default Home;