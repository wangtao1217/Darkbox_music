import { DEFAULT_VALUE, LocalStorageFactory } from "./localstorage";


const KEY = {
    PLAY_HISTORY: '__playHistory',
    PLAY_LIST: '__playList',
    PLAY_MODE: '__playMode'
}

export const playHistory = LocalStorageFactory({ 
    key: KEY.PLAY_HISTORY, 
    defaultvalue: DEFAULT_VALUE.ARRAY 
});

export const setPlayHistory = (music) => {
    const list = playHistory.getItem().slice(0,27);

    //
    //

    return list;
};

export const MODE = {
    REPEAT: 'REPEAT',
    ORDER: 'ORDER',
};

export const playList = LocalStorageFactory({
    key: KEY.PLAY_LIST,
    defaultvalue: DEFAULT_VALUE.ARRAY
})