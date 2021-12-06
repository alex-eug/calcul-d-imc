import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__container--title">
                <h1 className="header__title" >Mon IMC</h1>
                <p className="header__para">Calcul de l'Indice de Masse Corporelle</p>
            </div>
            <nav className="header__nav--container">
                <p className="header__nav--element"> IMC adulte </p>
                <p className="header__nav--element"> IMC enfant </p>
                <p className="header__nav--element"> Formule et conseil </p>
            </nav>
        </div>
    )
}

export default Header
