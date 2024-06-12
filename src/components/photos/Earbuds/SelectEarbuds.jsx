import { EarbudsCase, EarbudFront, EarbudSide, TwoEarbuds } from "./earbudsPhotoElements";

function SelectEarbuds() {

    //SET style for mini-photos (flex column, center)

    return (
        <section class="mini-photos">
            <SelectCase/>
            <SelectFront/> 
            <SelectSide/> 
            <SelectTwo/> 
        </section>
    )
} 

function SelectCase () {
    return (
        //SET style for buds-container (border, circle, background, flex) and size for photo

        <div id="earbudsCase" className="buds-container">
            <EarbudsCase photoClass="mini-photo"/>
        </div>
    )
}

function SelectFront () {
    return (
        //SET style for buds-container (border, circle, background, flex) and size for photo

        <div id="earbudFront" className="buds-container">
            <EarbudFront photoClass="mini-photo"/>
        </div>
    )
}

function SelectSide () {
    return (
        //SET style for buds-container (border, circle, background, flex) and size for photo

        <div id="earbudFront" className="buds-container">
            <EarbudSide photoClass="mini-photo"/>
        </div>
    )
}

function SelectTwo () {
    return (
        //SET style for buds-container (border, circle, background, flex) and size for photo

        <div id="twoEarbuds" className="buds-container">
            <TwoEarbuds photoClass="mini-photo"/>
        </div>
    )
}

export {SelectEarbuds}