const Etiqueta = (props) => {

    var textoPadrao = "Textto Padrão da Etiqueta"

    return (
        <>
            <p>{(props.texto != null) ? props.texto : textoPadrao}</p>
        </>
    )

}

export default Etiqueta