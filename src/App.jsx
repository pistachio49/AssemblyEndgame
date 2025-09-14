import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { languages } from "./languages"
import './App.css'

function App() {
    const [currentWord, setCurrentWord] = React.useState('React')

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span
                className="chip"
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

    const mapCurrentWord = currentWord.split('').map((ch, ind) => <span key={ind}>{ch.toUpperCase()}</span>)
    console.log(mapCurrentWord)

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                    programming world safe from Assembly!</p>
            </header>

            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>

            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word-block">
                {mapCurrentWord}
            </section>
        </main>
    )
}

export default App
