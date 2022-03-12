import React from 'react'

const RockPaperScissorsContext = React.createContext({
  score: 0,
  activeId: '',
  changeActiveButtonId: () => {},
  gameResult: '',
})

export default RockPaperScissorsContext
