import { BlackWatch, YellowWatch, PinkWatch } from "./Watch/watchesPhotoElements" ;
import { EarbudsCase, EarbudFront, EarbudSide, TwoEarbuds } from "./Earbuds/earbudsPhotoElements";
import { SelectEarbuds } from "./Earbuds/SelectEarbuds";

function WatchMainPhoto() {

    return (
    
    //SET style for container and size for photo
    <section className="watch-photo">
        <BlackWatch photoClass="main-photo"/>
    </section>
    )
} 

function EarbudsPhotoSection () {
    return (
    
        //SET style for container (flex, align horizontally)
        <section className="earbuds-photo-section">
            <SelectEarbuds/>
            <EarbudsMainPhoto/>
        </section>
        )

}

function EarbudsMainPhoto() {

    return (
    //SET style for container and size for photo
    <section className="earbuds-photo">
        <EarbudsCase photoClass="main-photo"/>
    </section>
    )
}

export {WatchMainPhoto, EarbudsPhotoSection }