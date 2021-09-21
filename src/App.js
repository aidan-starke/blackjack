import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Card, PageHeader } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import ScoreCard from './components/ScoreCard'
import SetPlayers from './components/SetPlayers'
import ThemeSwitch from './components/ThemeSwitch'

function App ({ players }) {
  const [gameOn, setGameOn] = useState()

  useEffect(() => {
    if (players.length > 0)
      setGameOn(true)
  }, [players])

  return (
    <>
      <PageHeader
        title='BJ'
        subTitle='BlackJack'
        style={{ border: '1px solid rgb(235, 237, 240)' }}
        position='fixed'
      />
      <Content>
        <Card style={{ maxWidth: '1000px', margin: '10px auto', textAlign: 'center' }}>
          {!gameOn && <SetPlayers />}

          {gameOn && players.map(player => <ScoreCard name={player} key={player} />)}
        </Card>
      </Content>

      <ThemeSwitch />

      <Footer style={{ textAlign: 'center' }}>BlackJack ©2021 Created by <a href='https://starkemedia.com' target='_blank' rel="noreferrer">StarkeMedia</a></Footer>
    </>
  )
}

function mapStateToProps (state) {
  return {
    players: state.players,
  }
}

export default connect(mapStateToProps)(App)