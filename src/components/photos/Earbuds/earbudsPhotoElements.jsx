import PropTypes from 'prop-types';
import "../photos-style.scss";

function EarbudsCase({photoClass}) {
    return (
    <>
        <img src="/assets/images/earbuds/earbuds_01.png" alt="photo of earbuds in white case" className={photoClass}/>
    </>
    )
}

function EarbudFront({photoClass}) {
    return (
    <>
        <img src="/assets/images/earbuds/earbuds_02.png" alt="front photo of one earbud" className={photoClass}/>
    </>
    )
}

function EarbudSide({photoClass}) {
    return (
    <>
        <img src="/assets/images/earbuds/earbuds_03.png" alt="side photo of one earbud" className={photoClass}/>
    </>
    )
}

function TwoEarbuds({photoClass}) {
    return (
    <>
        <img src="/assets/images/earbuds/earbuds_04.png" alt="front photo of two earbuds without a case" className={photoClass}/>
    </>
    )
}

EarbudsCase.propTypes = {
    photoClass: PropTypes.string
}
EarbudFront.propTypes = {
    photoClass: PropTypes.string
}
EarbudSide.propTypes = {
    photoClass: PropTypes.string
}
TwoEarbuds.propTypes = {
    photoClass: PropTypes.string
}

export {EarbudsCase, EarbudFront, EarbudSide, TwoEarbuds}