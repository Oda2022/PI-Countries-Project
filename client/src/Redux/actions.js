import axios from "axios";

export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_NAMES = "GET_COUNTRY_NAMES";
export const GET_COUNTRY_CONTINENTS = "GET_COUNTRY_CONTINENTS";
export const GET_COUNTRY_ACTIVITIES = "GET_COUNTRY_ACTIVITIES";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const ORDER_ASC_DES = "ORDER_ASC_DES";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";


export const getCountry = () => {
  return async function (dispatch) {
    const response = await axios.get(`/countries`);
    return dispatch({
      type: GET_COUNTRY,
      payload: response.data,
    });
  };
};

export const getCountryNames = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/countries?name=${name}`);
      dispatch({ type: GET_COUNTRY_NAMES, payload: response.data });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getCountryContinents = (continent) => {
  return {
    type: GET_COUNTRY_CONTINENTS,
    payload: continent,
  };
};

export const getCountryActivities = (activity) => {
  return {
    type: GET_COUNTRY_ACTIVITIES,
    payload: activity,
  };
};

export const orderAsdDes = (order) => {
    return {
      type: ORDER_ASC_DES,
      payload: order,
    };
  };

export const orderPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const getCountryIds = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/countries/${id}`);
      dispatch({ type: GET_COUNTRY_ID, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getActivity = () => {
    return async function (dispatch) {
        const response = await axios.get('/activities');
        return dispatch({ type: GET_ACTIVITY, payload: response.data });
      };
    };


export const createActivity = (activity) => {
  return async function (dispatch) {
    try {
      const response = await axios.post('/activities', activity);
      alert(response.data.message);
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: response,
      });
    } catch (err) {
      alert(err.message);
    }
  };
};