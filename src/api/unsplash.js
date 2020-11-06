import axios from 'axios';

const DOMAIN = 'https://api.unsplash.com';
const SEARCH_PHOTOS = '/search/photos';
const ACCESS_TOKEN = 'lYR1X3fgUeI5kHGt5-fk_CLeLaPxy3by8ffqiE8Nj_4';

export async function asyncSearchPhotosOf(term) {
    const response = await unsplash.get( SEARCH_PHOTOS, {
        params: {
            query: term,
            per_page: 50
        }
    });
    return response.data.results;
}

const unsplash = axios.create({
    baseURL: DOMAIN,
    headers: {
        'Authorization': `Client-ID ${ACCESS_TOKEN}`,
        'Accept-Version': 'v1'
    }
});

export default unsplash;