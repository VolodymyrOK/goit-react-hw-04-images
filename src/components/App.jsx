import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchData } from './Api/Api';
import { CountPages, Layout } from './App.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { MessageToast } from './Messages/Messages';
import { ImageModal } from './Modal/Modal.styled';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [imgHits, setImgHits] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [largeImgURL, setLargeImgURL] = useState('');
  const [largeTags, setLargeTags] = useState('');

  useEffect(() => {
    if (!query) return;
    async function getDataImage() {
      try {
        setLoading(true);
        const dataFetch = await fetchData(query, page);

        if (dataFetch.totalHits === 0)
          return MessageToast('errorfound', 'Nothing found');

        setImgHits(prevImgHits => [...prevImgHits, ...dataFetch.hits]);
        setTotalHits(dataFetch.totalHits);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      } finally {
        setLoading(false);
      }
    }
    getDataImage();
  }, [query, page]);

  useEffect(() => {
    if (totalHits > 0) MessageToast('foundok', `Found ${totalHits} images`);
  }, [totalHits]);

  useEffect(() => {
    if (imgHits.length === totalHits && totalHits !== 0)
      MessageToast('foundok', `Search completed. There is nothing more.`);
    if (imgHits.length > totalHits)
      MessageToast(
        'foundok',
        `Search completed. The number of requested images has exceeded the maximum allowed.`
      );
  }, [imgHits.length, totalHits]);

  const onloadMore = () => {
    setPage(page + 1);
    scroll.scrollMore(500);
  };

  const handleFormSubmit = queryNew => {
    setQuery(queryNew);
    setImgHits([]);
    setPage(1);
    setTotalHits(0);
  };

  const getlargeImgURL = (url, tags) => {
    setLargeImgURL(url);
    setLargeTags(tags);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <Searchbar onSubmit={handleFormSubmit} />
      {imgHits.length > 0 && (
        <CountPages>{imgHits.length + '/' + totalHits}</CountPages>
      )}
      {loading && <Loader />}

      {imgHits.length > 0 && (
        <ImageGallery
          props={imgHits}
          getLargeImgUrl={getlargeImgURL}
          toggleModal={toggleModal}
        />
      )}

      {totalHits > imgHits.length && !loading && (
        <Button onClick={onloadMore} />
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <ImageModal
            src={largeImgURL}
            alt={largeTags}
            title="Press Esc to exit"
          />
        </Modal>
      )}
    </Layout>
  );
};
