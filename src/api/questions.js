import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';

class QuestionApi {

  static registerAnswer(answerId) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/lessons/registerAnswer?answerid=' + answerId,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }
}

export default QuestionApi;
