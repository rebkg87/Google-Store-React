import React, { useContext } from 'react';
import "./photos-style.scss"
import { SelectEarbuds } from "./Earbuds/SelectEarbuds";
import { PhotoContext, PhotoProvider } from "./photo-context";

function EarbudsPhotoSection () {
    
    return (
        <PhotoProvider defaultImage= "/assets/images/earbuds/earbuds_01.png">
        <section className="earbuds-photo-section">
            <SelectEarbuds/>
            <EarbudsMainPhoto/>
        </section>
        </PhotoProvider>
        )
}

function EarbudsMainPhoto() {

    const { selectedPhoto } = useContext(PhotoContext);

    return (
    <section className="earbuds-main main-container">
        <img src={selectedPhoto} className="buds-main-photo" alt="earbuds"/>
    </section>
    );
}

function Watch ({ photoClass, photoUrl }) {
    return <img className={photoClass} src={photoUrl} alt="smartwatch" />;
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