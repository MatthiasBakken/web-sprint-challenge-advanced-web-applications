import { axiosWithAuth } from '../helpers/axiosWithAuth';

const fetchColorService = () => {
  let colors = [];
  return axiosWithAuth().get( '/colors' );
};

export default fetchColorService;