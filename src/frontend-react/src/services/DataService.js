import axios from 'axios'

const DATA_REST_API_URL = 'http://localhost:8080/data/';

// this class just talks to the backend
// for each step there is a specific request path

class DataService {

  getDiagramType(diagramType) {
    var new_request = DATA_REST_API_URL + 'd/' + diagramType;
    return axios.get(new_request);
  }


  getCountries(indexes) {
    var new_request = DATA_REST_API_URL + 'i/' + indexes;
    return axios.get(new_request);
  }


  getYears(countries) {
    var new_request = DATA_REST_API_URL + 'c/' + countries;
    return axios.get(new_request);
  }


  getFinalData(years) {
    var new_request = DATA_REST_API_URL + 'y/' + years;
    return axios.get(new_request);
  }


}

export default new DataService();
