import {Button, Image} from './styledComponents'

const GameButton = props => {
  const {buttonData} = props
  const {id, imageUrl} = buttonData
  let testidValue = ''
  if (id === 'ROCK') {
    testidValue = 'rockButton'
  } else if (id === 'PAPER') {
    testidValue = 'paperButton'
  } else {
    testidValue = 'scissorsButton'
  }

  const onClickButton = () => {
    const {selectButton} = props
    selectButton(id)
  }
  return (
    <Button data-testid={testidValue} type="button" onClick={onClickButton}>
      <Image src={imageUrl} alt={id} />
    </Button>
  )
}

export default GameButton
