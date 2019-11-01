const unsplash = async (url = '', method = 'GET') => {
  const baseURL = 'https://api.unsplash.com';

  return await fetch(`${baseURL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Client-ID c97666504555b9a58c55f2fbf06a7ab40497e16a3e33690a66fa42c8924df84a',
    },
  });
};

export default unsplash;
