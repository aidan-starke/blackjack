import { Button, Card, Divider } from 'antd'
import React, { useEffect, useState } from 'react'

export default function ScoreCard ({ name }) {
    const [player, updatePlayer] = useState({
        chips: 100,
        wins: 0,
        losses: 0,
        bjs: 0
    })

    const blackjack = () => updatePlayer({ ...player, bjs: player.bjs + 1, chips: player.chips + 15 })
    const win = () => updatePlayer({ ...player, chips: player.chips + 10 })
    //10 chips or less, only bet 5
    const lose = () => player.chips > 10 ? updatePlayer({ ...player, chips: player.chips - 10 }) : updatePlayer({ ...player, chips: player.chips - 5 })

    useEffect(() => {
        if (player.chips <= 0) {
            updatePlayer({ ...player, losses: player.losses + 1, chips: 100 })
        }
        if (player.chips >= 200) {
            //on wins, player keeps extra chips won from BlackJacks
            updatePlayer({ ...player, wins: player.wins + 1, chips: 100 + (player.bjs * 5) })
        }
    }, [player])

    return (
        <Card style={{ maxWidth: '350px', display: 'inline-flex', margin: 10 }} title={name}>
            <p>Current chips: {player.chips}</p>
            <Divider />
            <div style={{ textAlign: 'center' }}>
                <Button onClick={blackjack} style={{ margin: 10 }}>BlackJack!</Button>
                <Button onClick={win} style={{ margin: 10 }}>Win</Button>
                <Button onClick={lose} style={{ margin: 10 }}>Lose</Button>
            </div>
            {player.wins !== 0 && <Divider />}
            {player.wins !== 0 && <p>Wins: {player.wins}</p>}
            {player.losses !== 0 && <Divider />}
            {player.losses !== 0 && <p>Losses: {player.losses}</p>}
        </Card>
    )
}