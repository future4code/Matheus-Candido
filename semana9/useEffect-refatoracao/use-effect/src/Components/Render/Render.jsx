import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from '../PokeCard/PokeCard'

export default function Render() {
    const [pokeList, setPokeList] = useState([])
    const [pokeName, setPokeName] = useState()

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000")
            .then(r => {
                setPokeList(r.data.results)
            }).catch(e => {
                console.log(e)
            })
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const changePokeName = e => {
        setPokeName(e.target.value)
    }

    return (
        <div>
            <select onChange={changePokeName}>
                <option value="">Nenhum</option>
                {pokeList.map(pokemon => {
                    return (
                        <option key={pokemon.name} value={pokemon.name}>
                            {pokemon.name}
                        </option>
                    )
                })}
            </select>
            {pokeName && <PokeCard pokemon={pokeName} />}
        </div>
    )
}