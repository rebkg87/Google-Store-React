import { BlackWatch, YellowWatch, PinkWatch } from "./watchesPhotoElements" ;


function WatchSelectColors() {
    return (
        <section className="select-colors">
            <p>Choose a color</p>
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
        <div id="black-watch" className="watch-container">
            <BlackWatch photoClass="small-photo"/>
            <p>Midnight Zen</p>
        </div>
    )
}

function SelectPink () {
    return (
        <div id="pink-watch" className="watch-container">
            <PinkWatch photoClass="small-photo"/>
            <p>Lilac Bliss</p>
        </div>
    )
}

function SelectYellow () {
    return (
        <div id="yellow-watch" className="watch-container">
            <YellowWatch photoClass="small-photo"/>
            <p>Morning Glow</p>
        </div>  
    )
}

export {WatchSelectColors}