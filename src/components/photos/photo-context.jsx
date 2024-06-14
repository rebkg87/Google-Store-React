import React, { createContext, useState } from 'react';

const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
    const [selectedPhoto, setSelectedPhoto] = useState('/assets/images/smartwatch/smartwatch_black.png'); // Default URL

    const handlePhotoClick = (photoUrl) => {
        setSelectedPhoto(photoUrl);
    };

    return (
        <PhotoContext.Provider value={{ selectedPhoto, handlePhotoClick }}>
            {children}
        </PhotoContext.Provider>
    );
};

export { PhotoContext, PhotoProvider };
