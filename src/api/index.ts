import axios from "axios";
import { Coords } from "../context/Location.context";
import Current from "../interfaces/current";
import Forecast from "../interfaces/forecast";

const axInstance = axios.create({
  baseURL: "https://jonathan-potter-weather-api.herokuapp.com/",
});

const getCity = async (coords: Coords) => {
  const { latitude, longitude } = coords;
  try {
    const result = await axInstance.get(
      `api/geoapify/city/${latitude}/${longitude}`
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

const getCoordsFromZip = async (zip: string) => {
  try {
    const result = await axInstance.get(`api/geoapify/coords/${zip}`);
    return result.data;
  } catch (error: any) {
    console.log(error);
  }
};

const getCurrent = async (coords: Coords) => {
  const { latitude, longitude } = coords;
  try {
    const response = await axInstance.get(
      `api/weather/current/${latitude}/${longitude}`
    );
    return response.data as Current;
  } catch (error: any) {
    window.alert(error.message);
  }
};

const getThreeDay = async (coords: Coords) => {
  const { latitude, longitude } = coords;
  try {
    const response = await axInstance.get(
      `api/weather/three-day/${latitude}/${longitude}`
    );
    return response.data as Forecast;
  } catch (error: any) {
    window.alert(error.message);
  }
};

const geoapify = { getCity, getCoordsFromZip };

const weather = { getCurrent, getThreeDay };

const api = { geoapify, weather };

export default api;
