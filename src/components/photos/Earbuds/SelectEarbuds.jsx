import { useContext } from "react";
import { PhotoContext } from "../photo-context";
import { earbudsPhotos } from "../../../data";

function SelectEarbuds() {
  const { handlePhotoClick } = useContext(PhotoContext);

  return (
    <section className="buds-mini-photos">
      {earbudsPhotos.map((photo) => (
        <div className="buds-container" key={photo.url}>
          <img
            src={photo.url}
            alt={photo.alt}
            className="buds-mini-photo"
            onClick={() => handlePhotoClick(photo.url)}
          />
        </div>
      ))}
    </section>
  );
}

export { SelectEarbuds };
