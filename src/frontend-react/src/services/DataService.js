import axios from 'axios'

const DATA_REST_API_URL = 'http://localhost:8080/data/';

class DataService {

  getCountries(indexes) {
    var request = DATA_REST_API_URL + 'i/' + indexes;
    return axios.get(request);
  }


  getYears(countries) {
    var new_request = DATA_REST_API_URL + 'c/' + countries;
    return axios.get(new_request);
  }


    //getCountries = async (indexes) => {
    //  var request = DATA_REST_API_URL + 'i/' + indexes;
    //  return await axios.get(request);
      //let { data } = res.data;
      //return data
      //this.setState({ users: data });
  //  };
}

export default new DataService();


//DataService.getCountries(selection).then((response) => {
//  countries = response.data
