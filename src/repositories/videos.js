import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(object) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Could not store the data :(');
    });
}

export default {
  create,
};