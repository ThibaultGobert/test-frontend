import api from './api/lpfApi';
import mapToLessonSlides from './mappers/mapToLessonSlides';

class SlidesApi {
  static getLessonSlides(lessonId, slideType) {
    return api
      .get('/lessons/getLessonNEW?lessonId=' + lessonId + '&slideType=' + slideType)
      .then(data => {
        return mapToLessonSlides(slideType, data);
      });
  }
}

export default SlidesApi;
