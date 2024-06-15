import React, { useContext } from 'react';
import { PhotoContext } from "../photo-context";
import { earbudsPhotos } from "../../../data";

function SelectEarbuds() {

    const { handlePhotoClick } = useContext(PhotoContext);

    return (
        <section className="buds-mini-photos">
            {earbudsPhotos.map((photo) => (
                    <div className="buds-container">
                        <img
                        src = {photo.url}
                        alt = {photo.alt}
                        className = "buds-mini-photo"
                        onClick={() => handlePhotoClick(photo.url)}
                        />
                    </div>
                    ))} 
        </section>
    )
} 



/* function SelectCase () {
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
 */

/* 
 return (
        <section className="buds-mini-photos">
            <SelectCase/>
            <SelectFront/> 
            <SelectSide/> 
            <SelectTwo/> 
        </section>
    )
*/
export {SelectEarbuds}