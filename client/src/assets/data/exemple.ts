import React from "react";
import { useRequest } from "../hook/useAudioArray";

// export const data = [];\
export function useRequestData(url:any) {
    //`api/desition-system/rules`
    const { requestArray } = useRequest(url);


    return {requestArray, useRequest }
}