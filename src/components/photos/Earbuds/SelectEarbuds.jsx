import { EarbudsCase, EarbudFront, EarbudSide, TwoEarbuds } from "./earbudsPhotoElements";

function SelectEarbuds() {
    return (
        <section class="buds-mini-photos">
            <SelectCase/>
            <SelectFront/> 
            <SelectSide/> 
            <SelectTwo/> 
        </section>
    )
} 

function SelectCase () {
    return (
        <div id="earbudsCase" className="buds-container">
            <EarbudsCase photoClass="buds-mini-photo"/>
        </div>
    )
}

function SelectFront () {
    return (
        <div id="earbudFront" className="buds-container">
            <EarbudFront photoClass="buds-mini-photo"/>
        </div>
    )
}

function SelectSide () {
    return (
        <div id="earbudFront" className="buds-container">
            <EarbudSide photoClass="buds-mini-photo"/>
        </div>
    )
}

function SelectTwo () {
    return (
        <div id="twoEarbuds" className="buds-container">
            <TwoEarbuds photoClass="buds-mini-photo"/>
        </div>
    )
}

export {SelectEarbuds}