import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '03960def14664615a8eab1f6bc4274b1',
  },
});
