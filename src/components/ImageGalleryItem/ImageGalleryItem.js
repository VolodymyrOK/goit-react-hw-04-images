import PropTypes from 'prop-types';
import { ImageGalleryItemIMG } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
  onImageClick,
}) => {
  return (
    <>
      <ImageGalleryItemIMG
        src={webformatURL}
        alt={tags}
        loading="lazy"
        onClick={() => {
          onImageClick({ src: largeImageURL, alt: tags });
        }}
      />
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  getLargeImgUrl: PropTypes.func,
  toggleModal: PropTypes.func,
};
