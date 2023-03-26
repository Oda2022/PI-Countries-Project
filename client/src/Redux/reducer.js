import {
    GET_COUNTRY,
    GET_COUNTRY_NAMES,
    GET_COUNTRY_CONTINENTS,
    GET_COUNTRY_ACTIVITIES,
    GET_COUNTRY_ID,
    ORDER_ASC_DES,
    ORDER_POPULATION,
    GET_ACTIVITY,
    CREATE_ACTIVITY,
  } from "./actions";

  const initialState = {
    allCountries: [],
    countries: [],
    activities: [],
    countryDetail: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRY:
        return {
          ...state,
          countries: action.payload,
          allCountries: action.payload,
        };
      case GET_COUNTRY_NAMES:
        return {
          ...state,
          countries: action.payload,
        };
  
      case GET_COUNTRY_CONTINENTS:
        return {
          ...state,
          countries: state.allCountries.filter(
            (country) => country.continents === action.payload
          ),
        };
  
      case GET_COUNTRY_ACTIVITIES:
        return {
          ...state,
          countries: state.allCountries.filter(
            (country) =>
              country.activities &&
              country.activities.map((acti) => acti.name).includes(action.payload)
          ),
        };
  
      case ORDER_ASC_DES: {
        action.payload === "A-Z"
          ? state.countries.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });
        return {
          ...state,
          countries: [...state.countries],
        };
      }
      case ORDER_POPULATION: {
        action.payload === "↥ population"
          ? state.countries.sort((a, b) => {
              if (a.population > b.population) return 1;
              if (a.population < b.population) return -1;
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.population < b.population) return 1;
              if (a.population > b.population) return -1;
              return 0;
            });
        return {
          ...state,
          countries: [...state.countries],
        };
      }
  
      case GET_ACTIVITY:
        return {
          ...state,
          activities: action.payload,
        };
      case GET_COUNTRY_ID:
        return {
          ...state,
          countryDetail: action.payload,
        };
  
      case CREATE_ACTIVITY:
        return {
          ...state,
        };
  
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;
  