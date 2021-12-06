import React from 'react'
import { useState } from 'react'
import './calculImcPageAdult.scss'

const CalculImcPageAdult = () => {

    const [height, setheight] = useState("")
    const [weight, setweight] = useState("")
    const [result, setresult] = useState(0)

    const onChangeInputHeight = (evt) => {
        setheight(evt.target.value)
    }
    const onChangeInputWeight = (evt) => {
        setweight(evt.target.value)
    }
    const onSubmitCalcImc = (evt) => {
        evt.preventDefault()
        setresult((weight/(height*height))*10000) 
        document.querySelector('.calcul__result--span').classList.remove('hidden')
    }

    return (
        <div className="calcul__container">
            <h2 className="calcul__title">Calcul de l'IMC chez l'adult</h2>
            <form
                className="calcul__form"
                // action="#"
                // method="/aa"
                id="calcul-form"
                onSubmit={onSubmitCalcImc}
            >
                <label
                    className="calcul__input--label"
                    htmlFor="height">Votre taille en cm:
                </label>
                <input
                    className="calcul__input"
                    type="number"
                    value={height}
                    id="calcul-input--"
                    name="height"
                    onChange={onChangeInputHeight}
                >
                </input>
                <label
                    className="calcul__input--label"
                    htmlFor="weight">Votre poid en kg:
                </label>
                <input
                    className="calcul__input"
                    type="number"
                    value={weight}
                    id="calcul-input-weight"
                    name="weight"
                    onChange={onChangeInputWeight}
                ></input>
                <button
                    className="calcul__button"
                    type="submit"
                >
                    Soumettre
                </button>
            </form>
            <p className="calcul__result"><span className="calcul__result--span hidden">votre imc est de {result.toFixed(0)}</span></p>
        </div>
    )
}

export default CalculImcPageAdult
