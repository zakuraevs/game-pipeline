import React, {useRef} from 'react';
const { uuid } = require('uuidv4');

const GameForm = ({games, setGames}) => {

  const newGameRef = useRef()

  const handleGameSubmit = (event) => {
    const newGameTitle = newGameRef.current.value
    if(newGameTitle === '') return
    setGames(prevGames => {
      return [...prevGames, {id: uuid(), title: newGameTitle, status: 'not completed'}]
    })
    newGameRef.current.value = null
  }

  const clearGameList = (event) => {
    setGames([])
  }  


  return (
    <>
      <input type="text" ref={newGameRef}/>
      <button onClick={handleGameSubmit}>Add</button>
      <button onClick={clearGameList}>Add</button>
      <div>{games.length} games in the pipeline:</div>
      <ul>
        {games.map(game => <li key={game.id}>{game.title} - {game.status}</li>)}
      </ul>
      
    </>
  );
}

export default GameForm;