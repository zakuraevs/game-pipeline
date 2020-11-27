import React, { useState, useEffect } from 'react'
import GameForm from './GameForm'

const Home = () => {

  const LOCAL_STORAGE_KEY = 'pipeline.games'
  const [ games, setGames ] = useState([])
  
  useEffect(() => {
    const storedGames = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedGames) setGames(storedGames)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(games))
  }, [games])

  return (
    <div>
      <header className='test'>
          Pipeline
      </header>
      <GameForm games={games} setGames={setGames}/>
    </div>
  );
}

export default Home;
