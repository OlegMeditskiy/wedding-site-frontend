import {API_BASE_URL} from "../constants";
import {request} from "./APIUtils";

export function sendMailToSupport(sendMailToSupportRequest) {
    return request({
        url: API_BASE_URL + "/support/sendMailToSupport",
        method: 'POST',
        body: JSON.stringify(sendMailToSupportRequest)
    });
}
export function createPersonalInvitation(createRequest) {
    return request({
        url: API_BASE_URL + "/create/invitation",
        method: 'POST',
        body: JSON.stringify(createRequest)
    });
}
