export async function useShortUrl() {
  const config = useRuntimeConfig();

  const get = async (id) =>
    await useFetch(() => '/', {
      method: 'GET',
      baseURL: config.public['API_BASE_URL'],
      headers: { api_key: config['API_KEY'] },
      query: {
        id,
      },
    });

  return {
    get,
  };
}
