import React, { createContext, useState } from 'react';

const PhotoContext = createContext();

const PhotoProvider = ({ children, defaultImage }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(defaultImage); // Default URL

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
