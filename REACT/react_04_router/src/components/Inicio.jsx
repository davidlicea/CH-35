import { Link } from "react-router-dom"

const Inicio = () => {
    return(
        <>
        <div>
            <h1>Esta es la página de Inicio</h1>
            <Link to="nosotros">
                Presiona aqui para ir a la página Sobre Nosotros
            </Link>
            <br />
            <br />
            <Link to="contacto">
                Presiona aqui para ir a la página Contacto
            </Link>
        </div>
        </>
    )
}

export  default Inicio