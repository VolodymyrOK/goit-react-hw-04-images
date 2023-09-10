import PropTypes from 'prop-types';
import { ImageGalleryItemIMG } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
  getLargeImgUrl,
  toggleModal,
}) => {
  return (
    <>
      <ImageGalleryItemIMG
        src={webformatURL}
        alt={tags}
        loading="lazy"
        onClick={() => {
          getLargeImgUrl(largeImageURL, tags);
          toggleModal();
        }}
      />
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
  getLargeImgUrl: PropTypes.func,
  toggleModal: PropTypes.func,
};
