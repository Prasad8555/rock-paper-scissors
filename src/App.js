import {Component} from 'react'

import {AiOutlineClose} from 'react-icons/ai'

import Popup from 'reactjs-popup'

import RockPaperScissorsContext from './Components/RockPaperScissorsContext'

import Header from './Components/Header'

import GameButton from './Components/GameButtonItem'

import {
  GameBackgroundContainer,
  RulesBackgroundContainer,
  RulesBtn,
  RulesImg,
  ResultImagesContainer,
  Container,
  Image,
  GameResult,
  PlayAgainBtn,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    activeButtonId: '',
    randomButtonIndex: Math.floor(Math.random() * choicesList.length),
    gameResult: '',
  }

  playAgain = () => {
    this.setState({
      activeButtonId: '',
      gameResult: '',
      randomButtonIndex: Math.floor(Math.random() * choicesList.length),
    })
  }

  selectButton = id => {
    const {randomButtonIndex} = this.state
    this.setState({
      activeButtonId: id,
    })
    const randomButtonId = choicesList[randomButtonIndex].id
    if (id === randomButtonId) {
      this.setState({
        gameResult: 'IT IS DRAW',
      })
    } else if (id === choicesList[0].id) {
      if (randomButtonId === choicesList[1].id) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameResult: 'YOU WON',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameResult: 'YOU LOSE',
        }))
      }
    } else if (id === choicesList[1].id) {
      if (randomButtonId === choicesList[2].id) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameResult: 'YOU WON',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameResult: 'YOU LOSE',
        }))
      }
    } else if (randomButtonId === choicesList[0].id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
      }))
    }
  }

  render() {
    const {activeButtonId, randomButtonIndex, score, gameResult} = this.state
    const [clickedButton] = choicesList.filter(
      each => each.id === activeButtonId,
    )

    return (
      <RockPaperScissorsContext.Provider
        value={{
          activeId: activeButtonId,
          changeActiveButtonId: this.selectButton,
          score,
          gameResult,
        }}
      >
        <GameBackgroundContainer>
          {activeButtonId === '' ? (
            <div>
              <Header />
              <div>
                <div>
                  {choicesList.map(eachItem => (
                    <GameButton
                      key={eachItem.id}
                      selectButton={this.selectButton}
                      buttonData={eachItem}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <GameBackgroundContainer>
              <Header />
              <ResultImagesContainer>
                <Container>
                  <p>YOU</p>
                  <Image src={clickedButton.imageUrl} alt="your choice" />
                </Container>
                <Container>
                  <p>OPPONENT</p>
                  <Image
                    src={choicesList[randomButtonIndex].imageUrl}
                    alt="opponent choice"
                  />
                </Container>
              </ResultImagesContainer>
              <div>
                <GameResult>{gameResult}</GameResult>
                <PlayAgainBtn type="button" onClick={this.playAgain}>
                  PLAY AGAIN
                </PlayAgainBtn>
              </div>
            </GameBackgroundContainer>
          )}
          <Popup modal trigger={<RulesBtn type="button">RULES</RulesBtn>}>
            {close => (
              <RulesBackgroundContainer>
                <AiOutlineClose onClick={() => close()} />
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesBackgroundContainer>
            )}
          </Popup>
        </GameBackgroundContainer>
      </RockPaperScissorsContext.Provider>
    )
  }
}

export default App
