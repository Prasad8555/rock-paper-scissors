import RockPaperScissorsContext from '../RockPaperScissorsContext'
import {
  HeaderContainer,
  HeaderHeading,
  ScoreContainer,
  ScoreText,
  Score,
} from './styledComponents'

const Header = () => (
  <>
    <RockPaperScissorsContext.Consumer>
      {value => {
        const {score} = value
        return (
          <HeaderContainer>
            <HeaderHeading>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </HeaderHeading>
            <ScoreContainer>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </ScoreContainer>
          </HeaderContainer>
        )
      }}
    </RockPaperScissorsContext.Consumer>
  </>
)

export default Header
