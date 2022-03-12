import axios from "axios";
import {BASE_URL} from '../constant/BaseUrl'


export function getFaq(){
  let url = `${BASE_URL}/api/v1/faq`
  return axios.get(url)

}