import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'bearer 789allYciWn2n3Rj9vv80TtHrh8CAAy10iIVwFFYijqT3AHHyxyyvTV1TPCPGB-TL5PVs0kAlB3Y7UzoY8YK5Qpu__ojMYsspJ_IjvZRAbR_orDQ0NOmLjT4cpNuXnYx'
    }
});