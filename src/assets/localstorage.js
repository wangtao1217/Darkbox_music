export const DEFAULT_VALUE = {
    ARRAY: "[]",
    OBJECT: "{}",
    STRING: ""
}

export const LocalStorageFactory = (params) => {
    const { key, defaultvalue, raw, stringify = JSON.stringify, parse = JSON.parse } = params;

    const setItem = (value) => {
        const data = stringify(value)
        window.localStorage.setItem(key, data || defaultvalue);
    };

    const getItem = () => {
        const list = window.localStorage.getItem(key) || defaultvalue;
        return parse(list);
    }

    const removeItem = (value) =>  window.localStorage.removeItem(key);

    return {
        setItem,
        getItem,
        removeItem,
    };
} ;