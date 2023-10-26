import { useEffect, useState } from "react";
import axios from "axios";

// Массив при get запрос
export function useRequestArray(url: string) {
    const [requestArray, setRequestArray] = useState([]);

    async function featchArray() {
        try {
            const response = await axios.get(url);

            setRequestArray(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        featchArray();
    })

    return { requestArray };
}