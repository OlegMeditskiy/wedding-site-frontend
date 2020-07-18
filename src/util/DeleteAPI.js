import {API_BASE_URL} from "../constants";
import {request} from "./APIUtils";

export function deletePersonalInvitation(deletePersonalInvitationRequest) {
    return request({
        url: API_BASE_URL + "/admin/delete/personalInvitation",
        method: 'DELETE',
        body: JSON.stringify(deletePersonalInvitationRequest)
    })
}
