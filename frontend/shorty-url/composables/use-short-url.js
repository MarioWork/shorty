export async function useShortUrl() {
  const config = useRuntimeConfig();

  const get = async (id) =>
    await useFetch(() => '/', {
      method: 'GET',
      baseURL: config.public['RETRIEVE_API'],
      headers: { api_key: config['API_KEY'] },
      query: {
        id,
      },
    });

  const create = async (url) => {
    await useFetch(() => '/', {
      method: 'POST',
      baseURL: config.public['WRITE_API'],
      headers: {
        api_key: config['API_KEY'],
      },
      body: {
        url,
      },
    });
  };

  return {
    get,
    create,
  };
}
