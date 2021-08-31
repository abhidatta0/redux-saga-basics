import axios from 'axios';
const RANDOM_URL = `https://api.quotable.io/random`

export const getSingleQuote = async () => {
    const res = await axios.get(RANDOM_URL);
    return res.data;
}