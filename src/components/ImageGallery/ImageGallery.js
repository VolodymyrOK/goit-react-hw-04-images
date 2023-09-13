import PropTypes from 'prop-types';
import { ImageGalleryLi, ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <>
      <ImageGalleryUl>
        {images.map(item => (
          <ImageGalleryLi key={item.id}>
            <ImageGalleryItem item={item} onImageClick={onImageClick} />
          </ImageGalleryLi>
        ))}
      </ImageGalleryUl>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onImageClick: PropTypes.func,
};
