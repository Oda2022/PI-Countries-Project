import axios from "axios";
import {FILTER_COUNTRIES, 
        GET_COUNTRIES, 
        GET_COUNTRIES_BY_NAME, 
        ORDER_COUNTRIES_ALF, 
        ORDER_COUNTRIES_POP,
        GET_TOURIST_ACTIVITIES, 
        GET_COUNTRY_DETAIL, 
        GET_COUNTRIES_QUERY, 
        FILTER_BY_ACTIVITIES } from "./actionTypes"; 

export function getCountries(){
    return async function(dispatch){
        try{
            const response = await axios.get(`/countries`);
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
            return response.data;
        }catch (error) {
            console.log(error);
        }
    }
}

export function filterByContinents(payload){
    return {
        type: FILTER_COUNTRIES,
        payload
    }
}

export function orderByName(payload) {
    return {
        type: ORDER_COUNTRIES_ALF,
        payload
    }
}

export function orderByPop(payload) {
    return {
        type: ORDER_COUNTRIES_POP,
        payload
    }
}

export function getCountriesDetail(id){
    return async function (dispatch){
        try {
          const response = await axios.get(`/countries/${id}`);
            dispatch ({
                type: GET_COUNTRY_DETAIL,
                payload: response.data
            })
            return response.data;
        } catch (error){
          console.log(error);
        }     
    }
}

export default function getCountriesSearch(name){
    return async function (dispatch){
        try {
          const response = await axios.get(`/countries?name=${name}`);
            dispatch ({
                type: GET_COUNTRIES_QUERY,
                payload: response.data
            })
            return response.data;
        } catch (error){
          console.log(error);
        }
    }
}

export function filterByAct(activity){
    return{
        type: FILTER_BY_ACTIVITIES,
        payload: activity
    }
}

export function getActivities(){
  return async function (dispatch) {    
    const response = await axios.get(`/activities`);
            return dispatch({
              type: GET_TOURIST_ACTIVITIES,
              payload: response.data,
            });
          }
          .catch((err) => console.log(err));
      };
    


export function postActivity (payload){
    return async function(dispatch){
        const response = await axios.post('/activities', payload)
        console.log(response)
        return response
    }
}

export function getCountriesByName (name) {
    console.log(name)
        return {
            type: GET_COUNTRIES_BY_NAME,
            payload: name,
            
        }
     
}