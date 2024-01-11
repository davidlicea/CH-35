import './Product.css'


/*
Comente esta linea de codigo por que fue la que use para el ejemplo de props estructurado
const Product = (props) => {*/
    const Product = ( {img, name, description, price} ) => {
    return (
        <>
        {/* Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información

        <div className="cards">
            <div className="products--card">
                <img src= 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' alt='sneakers' />
                <h3>Fashion</h3>
                <p>Tennis Fitness Running Purple</p>
                <h4>$1958</h4>
            </div>
        </div>
    */}
        {/* Props estructurados. Puedo asignar diferentes propiedades a un div, sin tener que generar muchos props, solamente usando la palabra reserada 'props' como parámtero de la función 
        * Quiero modificar varias propiedades, puedo mandar llamar las props dentro de cada elemento, como si fueran métodos. 
        <div className="cards">
            <div className="products--card">
                <img src= {props.img} alt= 'sneakers'/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div>*/}

        {/*Props desestructurados: Permite asingar datos de un objeto a una variable separada para que en dicha variable pueda contener los datos provenientes del objeto.
        No utilizamos 'props' como parametro de la funcion, sino que, asignamos parametros a cada elemento y lo llamamos directamente en dichos elementos.
        Los props desesctructurados viven como parametros, pero entre llaves y se les asigna un nombre especifico*/}
        <div className="cards">
            <div className="products--card">
                <img src={img} alt= 'sneakers'/>
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
        </>
    )
}

export default Product
