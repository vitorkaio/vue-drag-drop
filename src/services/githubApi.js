import axios from 'axios';

export const loadReposApi = async (user) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${user}/repos`);
    return res.data;
  } catch (error) {
    return null;
  }
}