import axios from "axios";

export function useGetFetchArray() {


    async function featchArray(parURL: string) {
        try {
            const response: any = await axios.get(parURL);

            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }


    return {
        featchArray
    }
}