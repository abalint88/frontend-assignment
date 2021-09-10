import axios from "axios";

const endpoint = "http://localhost:1337/tasks";

export async function apiFetch(setter, setError) {
    try {
        let apiResponse = await axios.get(endpoint);
        if (apiResponse.data) {
            setter(apiResponse.data)
        }
    }
    catch (error) {
        setError(error)
    }
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

export async function apiComplete(isLoading, id, taskPayload) {
    const newTaskPayload = { ...taskPayload, "complete": true }
    isLoading(true);
    await axios.patch(`${endpoint}/${id}`, newTaskPayload)
    isLoading(false);
}
