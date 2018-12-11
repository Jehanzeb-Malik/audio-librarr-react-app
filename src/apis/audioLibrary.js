import axios from 'axios';
import config from '../config/config';

export default axios.create({
  baseURL: `${config.BASE_URL}:${config.PORT}/api`
})