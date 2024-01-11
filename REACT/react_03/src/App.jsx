import './App.css'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Main from './components/main'
import IconAvatars from './components/Icon'


function App() {
  const imgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
  const imgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";
  const camel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";

  return (
    <>
      <Navbar/>
      <Main/>
      <Button label={"Traer información"}/>
      <Button label={"Enviar información"}/>
      <Product
        img={imgFashion}
        name="Fashion"
        description="Tennis Fitness Running Purple"
        price="$1958"
      />
      <Product
        img={imgDark}
        name="Dark"
        description="Tennis Dark Running"
        price="$2296"
      />
      <Product
        img={camel}
        name="Camel"
        description="Casual tennis"
        price="$3431"
      />
      <Product
        img={imgDark}
        name="Dark-baratos"
        description="Casual tennis"
        price="$3000"
      />
      {/*Aqui ira mi componente de MUI y MJoy */}
      <IconAvatars/>
    </>
  )
}

export default App
