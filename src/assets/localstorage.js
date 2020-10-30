export const DEFAULT_VALUE = {
    ARRAY: [],
    OBJECT: {},
    STRING: ''
}

export const LocalStorageFactory = (params) => {
    const { key, defaultvalue, raw } = params;

    const setItem = (value) => {
        const data = window.localStorage.setItem(key, data || defaultvalue);
    }

    const getItem = (vaalue) => {
        const data = window.localStorage.getItem(key) || defaultvalue;
        return data;
    }

    const removeItem = (value) =>  window.localStorage.removeItem(key);

    return {
        setItem,
        getItem,
        removeItem,
    };
} ;