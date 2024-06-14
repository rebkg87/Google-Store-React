import React, { useContext } from 'react';
import { EarbudsCase, EarbudFront, EarbudSide, TwoEarbuds } from "./Earbuds/earbudsPhotoElements";
import { SelectEarbuds } from "./Earbuds/SelectEarbuds";
import "./photos-style.scss"
import { PhotoContext } from "./photo-context";

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

function Watch ({ photoClass, photoUrl }) {
    return <img className={photoClass} src={photoUrl} alt="Watch" />;
};


function WatchMainPhoto () {

    const { selectedPhoto } = useContext(PhotoContext);

    return (
        <section className="watch-main main-container">
            <Watch photoClass="watch-main-photo" photoUrl={selectedPhoto}/>
        </section>
    )

}

export {WatchMainPhoto, EarbudsPhotoSection }