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

  const handleDelete = (id) => {
    const oldGames =[...games]
    const newGames = oldGames.filter(g => g.id !== id)
    setGames(newGames)
  }


  return (
    <>
      <input type="text" ref={newGameRef}/>
      <button onClick={handleGameSubmit}>Add</button>
      <div>{games.length} games in the pipeline:</div>
      <ul>
        {games.map(game => 
          <div key={game.id}>
            <li>{game.title} - {game.status}<button onClick={() => handleDelete(game.id)}>Remove</button></li>
          </div>
        )}
      </ul>
      
    </>
  );
}

export default GameForm;