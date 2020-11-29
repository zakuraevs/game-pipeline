import React, { useState } from 'react'
//import GameForm from './GameForm'

const Home = () => {

  //const LOCAL_STORAGE_KEY = 'pipeline.games'
  //const [ games, setGames ] = useState([])
  
  /*useEffect(() => {
    const storedGames = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedGames) setGames(storedGames)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(games))
  }, [games])*/

  // hard-coing some games for dev purposes
  const s1 = "ᚻ"
  const s2 = "ᛉ"
  const s3 = "ᛗ"
  const s4 = "ᛇ"
  const s5 = "ᚩ"
  const s6 = "x"
  const imgSource = "https://res.cloudinary.com/teepublic/image/private/s--N4TpEgst--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-240/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-351/b_rgb:ffb81c/c_limit,f_jpg,h_630,q_90,w_630/v1559034692/production/designs/4942585_0.jpg"

  const hard_games = [{name: "Minecraft ", rank: 1, id: 0, description: "Minecraft is a sandbox video game developed by Mojang. The game was created by Markus \"Notch\" Persson in the Java programming language."},
                      {name: "World of Warcraft ", rank: 2, id: 1, description: "Minecraft is a sandbox video game developed by Mojang. The game was created by Markus \"Notch\" Persson in the Java programming language."},
                      {name: "Elite Dangerous ", rank: 3, id: 2, description: "Minecraft is a sandbox video game developed by Mojang. The game was created by Markus \"Notch\" Persson in the Java programming language."},
                      {name: "Sea of Thieves ", rank: 4, id: 3, description: "Minecraft is a sandbox video game developed by Mojang. The game was created by Markus \"Notch\" Persson in the Java programming language."},
                      {name: "Among Us ", rank: 5, id: 4, description: "Minecraft is a sandbox video game developed by Mojang. The game was created by Markus \"Notch\" Persson in the Java programming language."},
                     ]

  const [ games, setGames ] = useState(hard_games)
  

  const sorted_games = games.sort((a, b) => (a.rank < b.rank) ? -1 : 1)

  return (
    <main class="mainContainer">
      {/*<header className="mainHeader">
          Pipeline
      </header>*/}
        <section class="gamesContainer">
          {sorted_games.map(
            game => 
              <h2 key={game.id} class="singleGame">{game.name} </h2>
          )}
        </section>
        <section class="infoContainer">
            <p></p>
        </section>      
    </main>
  );
}

export default Home;
