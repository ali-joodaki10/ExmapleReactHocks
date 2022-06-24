import { useState, useEffect ,useDebugValue} from "react";

export const useFetch = url => {
    const [data, setDate] = useState(null);

    useEffect(() => {
        fetch(url).then((res) => res.json()).then(data => setDate(data));
    }, [url]);

    useDebugValue(data?"hasData" :"noHasData");

    return [data];
}

export const useUpdateLogger = value => {
    useEffect(() => {
        console.log('value:', value);
    }, [value]);
}
