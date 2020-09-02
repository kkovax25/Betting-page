import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';
import axios from 'axios';


export const register = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('http://localhost:5000/api/users', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    })
  }
}
