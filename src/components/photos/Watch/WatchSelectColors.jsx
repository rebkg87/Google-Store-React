import { BlackWatch, YellowWatch, PinkWatch } from "./watchesPhotoElements" ;


function WatchSelectColors() {

    //SET style for select-colors (flex column, flex-start)
    //SET style for watch-colors (flex, flex-wrap)

    return (
        <section className="select-colors">
            <p className="regular-text">Choose a color</p>
            <div className="watch-colors"> 
                <SelectBlack/>
                <SelectPink/>
                <SelectYellow/>             
            </div>
        </section>
    )
} 


function SelectBlack () {
    return (
    
        //SET style for watch-container (border, flex column) and size for photo

        <div id="black-watch" className="watch-container">
            <BlackWatch photoClass="small-photo"/>
            <p className="regular-text">Midnight Zen</p>
        </div>
    
    )
}

function SelectPink () {
    return (
    
        //SET style for container (border, flex column) and size for photo

        <div id="pink-watch" className="watch-container">
            <PinkWatch photoClass="small-photo"/>
            <p className="regular-text">Lilac Bliss</p>
        </div>
    
    )
}

function SelectYellow () {
    return (
    
        //SET style for container (border, flex column) and size for photo

        <div id="yellow-watch" className="watch-container">
            <YellowWatch photoClass="small-photo"/>
            <p className="regular-text">Morning Glow</p>
        </div>
    
    )
}

export {WatchSelectColors}