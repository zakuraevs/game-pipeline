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

  const hard_games = [{name: "Minecraft", rank: 1, id: 0, description: "Minecraft is a sandbox video game developed by Mojang. The game was created by Markus \"Notch\" Persson in the Java programming language."},
                      {name: "World of Warcraft", rank: 2, id: 1, description: "World of Warcraft is a massively multiplayer online role-playing game released in 2004 by Blizzard Entertainment. It is the fourth released game set in the Warcraft fantasy universe."},
                      {name: "Elite Dangerous", rank: 3, id: 2, description: "Elite Dangerous is a space flight simulation game developed and published by Frontier Developments. Piloting a spaceship, the player explores a realistic 1:1 scale open-world representation of the Milky Way galaxy, with the gameplay being open-ended."},
                      {name: "Sea of Thieves", rank: 4, id: 3, description: "Sea of Thieves is a 2018 action-adventure game developed by Rare and published by Xbox Game Studios. The player assumes the role of a pirate who completes voyages from different trading companies in order to become the ultimate pirate legend."},
                      {name: "Among Us", rank: 5, id: 4, description: "Among Us is an online multiplayer social deduction game developed and published by American game studio Innersloth and released on June 15, 2018. The game takes place in a space-themed setting, in which players each take on one of two roles, most being Crewmates, and a predetermined number being Impostors."},
                     ]

  const [ games, setGames ] = useState(hard_games)
  const [infoText, setInfoText] = useState('')

  // trash function name
  const setData = (text) => {
    setInfoText(text);
  }
  

  const sorted_games = games.sort((a, b) => (a.rank < b.rank) ? -1 : 1)

  return (
    <>
    <main class="mainContainer">
      {/*<header className="mainHeader">
          Pipeline
      </header>*/}
        <section class="gamesContainer">
          {sorted_games.map(
            game => 
              <h2 
                key={game.id} 
                class="singleGame"
                onMouseEnter={() => setData(game.description)}
              >
                {game.name} 
              </h2>
          )}
        </section>
        <section class="infoContainer">
            <p class="infoParagraph">{infoText}</p>
        </section>      
    </main>
    <footer>Test</footer>
    </>
  );
}

export default Home;
