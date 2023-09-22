import { useState, useEffect } from "react";
import Request from "../api-client/api-client";
const useGames =()=>{
    const [games, setGames]= useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const [error, setError]= useState(null);

    useEffect(()=>{
    },[]);

    return {games, isLoading, error};
}

export default useGames;