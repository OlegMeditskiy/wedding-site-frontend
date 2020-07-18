import {ACCESS_TOKEN, API_BASE_URL} from "../constants";
import {request} from "./APIUtils";


export function getPersonalInvitations(signal) {
    return request({
        url: API_BASE_URL + "/admin/get/personalInvitations",
        method: 'GET',
        signal:signal
    });
}

export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}
