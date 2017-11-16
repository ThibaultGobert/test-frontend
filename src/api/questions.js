import api from './api';

class QuestionApi {
  static registerAnswer(answerId) {
    return api
      .get('/lessons/registerAnswer?answerid=' + answerId)
      .then(response => response.data);
  }
}

export default QuestionApi;
