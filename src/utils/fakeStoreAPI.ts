import axios from "axios";
import { FAKE_STORE_API_URL as API_URL } from './constants'

const fakeStoreGet = async (path: string, dispatch: any, action: any) => {
    let isSuccessful: boolean = true;
    const response: any = await axios.get(
        `${API_URL}${path}`
    ).catch(() => {
        isSuccessful = false;
    });
    if (isSuccessful) {
        dispatch(action(response.data));
    }
    return isSuccessful;
}

export {
    fakeStoreGet
};