import { BlackWatch, YellowWatch, PinkWatch } from "./Watch/watchesPhotoElements" ;
import { EarbudsCase, EarbudFront, EarbudSide, TwoEarbuds } from "./Earbuds/earbudsPhotoElements";
import { SelectEarbuds } from "./Earbuds/SelectEarbuds";
import "./photos-style.scss"

function WatchMainPhoto() {
    return (
    <section className="watch-main main-container">
        <BlackWatch photoClass="watch-main-photo"/>
    </section>
    )
} 

function EarbudsPhotoSection () {
    return (
        <section className="earbuds-photo-section">
            <SelectEarbuds/>
            <EarbudsMainPhoto/>
        </section>
        )

}

function EarbudsMainPhoto() {
    return (
    <section className="earbuds-main main-container">
        <EarbudsCase photoClass="buds-main-photo"/>
    </section>
    )
}

export {WatchMainPhoto, EarbudsPhotoSection }