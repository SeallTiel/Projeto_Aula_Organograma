import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    //tenho essas duas opções para o style: defino uma const trazendo o obj e aplico no estilo ou abro dois {{}} para jogar o obj já dentro do style.
    const css = { backgroundColor:props.corSecundaria }
    return(
        
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor:props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}


export default Time