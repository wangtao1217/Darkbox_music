import { LocalStorageFactory, DEFAULT_VALUE } from "./localstorage";

const KEY = '__session';

export const session = LocalStorageFactory({
    key: KEY,
    defaultvalue: DEFAULT_VALUE.OBJECT,
});