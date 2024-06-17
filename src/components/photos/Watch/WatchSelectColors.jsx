import { smartwatch } from "../../../data";
import { PhotoContext } from "../photo-context";
import React, { useContext } from "react";

const WatchSelectColors = () => {
  const { handlePhotoClick } = useContext(PhotoContext);

  return (
    <section className="select-colors">
      <p>Choose a color</p>
      <div className="watch-colors">
        {smartwatch.map((photo) => (
          <div className="watch-container" key={photo.url}>
            <img
              src={photo.url}
              alt={photo.alt}
              className="small-photo"
              onClick={() => handlePhotoClick(photo.url)}
            />
            <p>{photo.color}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { WatchSelectColors };
