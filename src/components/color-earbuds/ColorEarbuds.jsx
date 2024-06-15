import "./colorEarbuds.scss";

function ColorEarbuds() {
    return(
        <div className="colors">
        <p className="color-choose-text">Choose a color</p>
        <div className="color-container">
            <div className="color celeste"></div>
            <div className="color beige"></div>
            <div className="color negro"></div>
            <div className="color gris"></div>
            <div className="color verde"></div>
            <div className="color rojo"></div>
        </div>
        </div>
    )
}

export default ColorEarbuds;