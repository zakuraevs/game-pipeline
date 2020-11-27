import React, {useState, useRef} from 'react';
const { uuid } = require('uuidv4');

const GameForm = ({games, setGames}) => {

  const newGameRef = useRef()
  //const [highestIndex, setHighestindex] = useState(0)

  const handleGameSubmit = (event) => {
    const newGameTitle = newGameRef.current.value
    const newIndex = games.length
    console.log("Adding a game at index " + newIndex)
    if(newGameTitle === '') return
    setGames(prevGames => {
      //trash below with games.length?
      return [...prevGames, {id: uuid(), title: newGameTitle, status: 'not completed', rank: newIndex}]
    })
    newGameRef.current.value = null
  }

  const handleDelete = (id) => {
    const oldGames =[...games]
    const newGames = oldGames.filter(g => g.id !== id)
    setGames(newGames)

  }

  // improve below 2 functions!
  const increaseRank = (id) => {
    const oldGames =[...games]
    // this is verbose
    const increasingGame = oldGames.find(g => g.id === id)
    if(increasingGame.rank === 0) return

    const decreasingRank = increasingGame.rank-1

    const decreasingGame = oldGames.find(g => g.rank === decreasingRank)

    increasingGame.rank -= 1
    decreasingGame.rank += 1

    const newGamesWithDecreased = oldGames.map(g => g.rank === decreasingRank ? decreasingGame : g)
    const newGamesWithIncreased = newGamesWithDecreased.map(g => g.id === id ? increasingGame : g)
    
    setGames(newGamesWithIncreased)
  }

  const decreaseRank = (id) => {}
    /*const oldGames =[...games]
    // this is verbose
    const decreasingGame = oldGames.find(g => g.id === id)
    if(decreasingGame.rank > games.length) return

    const decreasingRank = increasingGame.rank-1

    const decreasingGame = oldGames.find(g => g.rank === decreasingRank)

    increasingGame.rank -= 1
    decreasingGame.rank += 1

    const newGamesWithDecreased = oldGames.map(g => g.rank === decreasingRank ? decreasingGame : g)
    const newGamesWithIncreased = newGamesWithDecreased.map(g => g.id === id ? increasingGame : g)
    
    setGames(newGamesWithIncreased)
  }*/

  //const sortedByRank = games.sort((a, b) => (a.rank < b.rank) ? -1 : 1)

  return (
    <>
      <input type="text" ref={newGameRef}/>
      <button onClick={handleGameSubmit}>Add</button>
      <div>{games.length} games in the pipeline:</div>
      <ul>
        {games.map(game => 
          <div key={game.id}>
            <li>
              {game.title} - {game.status}
              <button onClick={() => handleDelete(game.id)}>Remove</button>
              <button onClick={() => increaseRank(game.id)}>↑</button>
              <button onClick={() => decreaseRank(game.id)}>↓</button>
            </li>
          </div>
        )}
      </ul>
      
    </>
  );
}

export default GameForm;