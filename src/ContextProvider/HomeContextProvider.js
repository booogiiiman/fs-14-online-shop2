import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const animeContext = createContext();
const API = "http://localhost:8000/anime";

const INIT_STATE = {
  anime: [],
  animeDetails: null,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ANIME":
      return { ...prevState, anime: action.payload.data };
    case "GET_ONE_ANIME":
      return { ...prevState, animeDetails: action.payload };
    default:
      return prevState;
  }
};
const HomeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  const addAnime = (anime) => {
    axios.post(API, anime);
    navigate("/");
  };

  const getAnime = async () => {
    // axios.get(API);
    const { data } = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_ANIME",
      payload: { data },
    });
  };

  const deleteAnime = async (id) => {
    await axios.delete(`${API}/${id}`);
    getAnime();
    navigate("/");
  };

  const editAnime = async (id, obj) => {
    await axios.patch(`${API}/${id}`, obj);
    getAnime();
    navigate("/");
  };

  const getOneAnime = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    console.log(data, "ddss");
    dispatch({
      type: "GET_ONE_ANIME",
      payload: data,
    });
  };

  // =======================
  const cloud = {
    addAnime,
    getAnime,
    deleteAnime,
    editAnime,
    getOneAnime,
    animeArr: state.anime,
    animeDetails: state.animeDetails,
  };

  return (
    <animeContext.Provider value={cloud}>{children}</animeContext.Provider>
  );
};

export default HomeContextProvider;
