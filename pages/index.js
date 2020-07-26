import ClaseComponent from '../componentes/ClaseComponent'
import Header from '../componentes/comunes/Header'
import {matematicas, ciencias} from '../data/Estudiantes'
import BarraTitulo from '../componentes/comunes/BarraTitulo'

export default () => (
    <div>
        <Header/>
        <BarraTitulo/>
        <h1 style={{textAlign: "center"}}>Cursos del plan</h1>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <ClaseComponent nombre="Matemáticas" clase={matematicas}/>
          <ClaseComponent nombre="Ciencias" clase={ciencias}/>
        </div>
        <style jsx global>
            {
                `
                    body {
                      background: #ffca20;
                    }
                `
            }
        </style>
    </div>
)

/*
import { BasicPicker } from 'react-color-tools'

const Contenedor = (props) => (
    <div style={{
        background:props.background,
        textAlign:"center",
        border:"1px solid",
        margin:"0 auto",
        padding:"20px",
        width:"700px"
    }}>
        {props.children}
    </div>
)

function Figura1(props) {
    return (
        <img src={`./static/${props.imagen}`} alt="" height="200" width="200"/>
    );
}

function Seccion1(props) {
    return (
        <section>
            <h2>Ésta es la sección 1</h2>
            <Figura1 imagen={props.imagen}/>
        </section>
    );
}

class Index extends React.Component {
    state = {
        background1:"hotpink",
        background2:"yellow"
    }
    render() {
        const {background1, background2} = this.state;
        return (
            <React.Fragment>
                <Contenedor background={background1}>
                    <h1>Bienvenidos a mi aplicación React JS</h1>
                    <p>Ésta es mi primera app con React JS</p>
                    <Seccion1 imagen='logo-login.png'/>
                    <BasicPicker 
                        background={background1}
                        onChange={(color)=>this.setState({background1:color})}
                    />
                </Contenedor>
                <Contenedor background={background2}>
                    <h1>Bienvenidos a mi aplicación React JS</h1>
                    <p>Ésta es mi primera app con React JS</p>
                    <Seccion1 imagen='certificado.jpg'/>
                    <BasicPicker 
                        background={background2}
                        onChange={(color)=>this.setState({background2:color})}
                    />
                </Contenedor>
            </React.Fragment>
        );
    }
}

export default Index;*/