import React from "react";
import { useRequestArray } from "../hook/useAudioArray";

// export const data = [];\
export function useRequestData(url:any) {
    //`api/desition-system/rules`
    const { requestArray } = useRequestArray(url);


    return {requestArray, useRequestArray }
}