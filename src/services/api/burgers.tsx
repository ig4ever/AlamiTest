import axios from 'axios';

import * as c from '../../constants';
import {config, handler} from './utils';

export async function getBurgers() {
  try {
    const res = await axios.get(`${c.API_URL}`, config());

    return res.data;
  } catch (e) {
    throw handler(e);
  }
}
