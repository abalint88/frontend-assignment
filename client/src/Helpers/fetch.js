import axios from "axios";

const endpoint = "http://localhost:1337/tasks";

export async function apiFetch(setter) {
    let apiResponse = await axios.get(endpoint);
    setter(apiResponse.data)
}

export async function apiPost(isLoading, formData) {
    isLoading(true);
    await axios.post(endpoint, formData)
    isLoading(false);

}

export async function apiDelete(isLoading, id) {
    isLoading(true);
    await axios.delete(`${endpoint}/${id}`)
    isLoading(false);
}

export async function apiUpdate(isLoading, id, formData) {
    isLoading(true);
    await axios.patch(`${endpoint}/${id}`, formData)
    isLoading(false);
}
