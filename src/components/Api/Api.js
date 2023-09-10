import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY = '38278991-17cfe7c1d9183e0e901f08bd5';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
const PER_PAGE = 12;

export const fetchData = async (query, page) => {
  const params = new URLSearchParams({
    key: KEY,
    q: query.slice(query.indexOf('/') + 1, query.length),
    image_type: IMAGE_TYPE,
    orientation: ORIENTATION,
    safesearch: SAFESEARCH,
    per_page: PER_PAGE,
    page: page,
  });
  if (params.q !== '') {
    const resp = await axios.get('?', { params });
    return resp.data;
  }
};
