import {useEffect, useState} from "react";
import {fetchRandomQuote, type RandomQuote} from "../utils/vndbApi.ts";

export function useQuoteBrowser() {

    const [currentQuote, setCurrentQuote] = useState<RandomQuote | null>(null)

    useEffect(() => {
        fetchRandomQuote().then(setCurrentQuote)
    },[])

    function fetchNewRandomQuote() {
        setCurrentQuote(null);
        fetchRandomQuote().then(setCurrentQuote)
    }

    return {currentQuote, fetchNewRandomQuote};
}