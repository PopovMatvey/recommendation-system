import { useState } from "react";

// Состояние "Пример"
export function useExempleState() {
    const [exemple,setexemple] = useState();  // Состояние "Пример"

    return {
        exemple,setexemple
    }
}