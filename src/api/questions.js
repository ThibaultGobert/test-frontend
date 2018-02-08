import api from './api/lpfApi';

class QuestionApi {
  static registerAnswer(answerId) {
    return api.get('/lessons/registerAnswer?answerid=' + answerId);
  }
}

export default QuestionApi;
