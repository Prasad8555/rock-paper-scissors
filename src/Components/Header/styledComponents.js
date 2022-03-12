import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #fff;
  padding: 18px;
  border-radius: 16px;
  margin-bottom: 28px;
`

export const HeaderHeading = styled.h1`
  color: #fff;
  font-family: 'Roboto';
  margin-top: 2px;
  margin-bottom: 2px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 6px;
  padding: 12px;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreText = styled.p`
  margin-top: 6px;
  margin-bottom: 4px;
  font-size: 16px;
`

export const Score = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 22px;
  font-weight: bold;
`
