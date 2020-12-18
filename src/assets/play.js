import { DEFAULT_VALUE, LocalStorageFactory } from "./localstorage";


export const KEY = {
    PLAY_HISTORY: '__playHistory',
    PLAY_LIST: '__playList',
    PLAY_MODE: '__playMode'
}

export const playHistory = LocalStorageFactory({ 
    key: KEY.PLAY_HISTORY, 
    defaultvalue: DEFAULT_VALUE.ARRAY 
});

export const setPlayHistory = (music) => {
    let list =playHistory.getItem()||[];
    let index = list.findIndex(item => item.id === music.id)

    if(index>-1){
        list.splice(index,1);
    }
    
    list.unshift(music)
    console.log(list)
    playHistory.setItem(list)

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

export const setPlayList = data => {
    playList.setItem(data?data:[])
}