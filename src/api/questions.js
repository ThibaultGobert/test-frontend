import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';

class QuestionApi {

  static registerAnswer(answerId) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/registerAnswer?answerid=' + answerId,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.token
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }
}

export default QuestionApi;
