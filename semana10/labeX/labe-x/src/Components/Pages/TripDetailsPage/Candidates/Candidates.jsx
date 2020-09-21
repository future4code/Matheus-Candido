import React from 'react'
import { Div, DivMap } from '../styles'
import ButtonsDecide from './ButtonsDecide'

export default function Candidates(props) {
    return (
        <div>
            <Div>
                {props.candidates ?
                    <div >
                        {props.candidates.map((candidate) => {
                            return (
                                <div >
                                    {candidate ? <div>
                                        <h2>Candidatos</h2>
                                        <DivMap>
                                            <strong>{candidate.name}</strong>
                                            <ButtonsDecide
                                                candidate={candidate}
                                                decideCandidate={props.decideCandidate}
                                            />
                                        </DivMap>
                                    </div>
                                        : <h2>sem candidatos</h2>}
                                </div>
                            )
                        })}
                    </div>
                    : <div>sem candidatos</div>}
            </Div>
        </div>
    )
}