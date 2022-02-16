import React, {useState} from 'react';
import Lives from './lives';
import Letters from './letters';
import Start from './start';
import Word from './word';

const MAX_LIVES = 6;
export default function Game(){
    //const [lives, setLives] = useState(6);
    const [actualWord, setActualWord] = useState("");
    const [playedLetters, setPlayedLetters] = useState([]);
    
    const word_set = new Set([...actualWord]);
    const playedSet = new Set([...playedLetters]);
    const wrongLetters = playedLetters.filter((letter) => {
        return !word_set.has(letter)
    })
    const lives = MAX_LIVES - wrongLetters.length;
    const isRunning = lives && actualWord;
    const isWon = isRunning && [...word_set].reduce((acc, curr) => {
        if(!playedSet.has(curr)) return false;
        return acc;
    }, true)

    const guess = letter => {
        setPlayedLetters((prev) => [...prev, letter])
    }

    const start = () => {
        setActualWord("house");
        setPlayedLetters([]);
    }

    return (
        <>
            { isRunning &&
                <>
                    <Lives livesLeft={lives}/>
                    <Word actualWord={actualWord} playedLetters={playedSet}/>
                    <Letters playedLetters={playedSet} onSelect={guess}/>
                </>

            }
            <Start onStart={start}/>
            {isWon && 
                <>You Won!</>
            }
            
        </>
    )

}