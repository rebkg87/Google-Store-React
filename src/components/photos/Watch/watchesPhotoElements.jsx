import PropTypes from 'prop-types';

function BlackWatch({photoClass}) {

    return (
    <>
        <img src="/assets/images/smartwatch/smartwatch_black.png" alt="black smartwatch photo" id="black" className={photoClass}/>
    </>
    )
}

function YellowWatch({photoClass}) {

    return (
    <>
        <img src="/assets/images/smartwatch/smartwatch_yellow.png" alt="yellow smartwatch photo" id="yellow" className={photoClass}/>
    </>
    )
}

function PinkWatch({photoClass}) {

    return (
    <>
        <img src="/assets/images/smartwatch/smartwatch_pink.png" alt="pink smartwatch photo" id="pink" className={photoClass}/>
    </>
    )
}

BlackWatch.propTypes = {
    photoClass: PropTypes.string
}

YellowWatch.propTypes = {
    photoClass: PropTypes.string
}

PinkWatch.propTypes = {
    photoClass: PropTypes.string
}

export  {BlackWatch, YellowWatch, PinkWatch}
