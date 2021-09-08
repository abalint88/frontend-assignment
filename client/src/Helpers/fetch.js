import axios from "axios";

export async function fetchApi(endpoint, setter) {
    let response = await fetch(endpoint)
    response = await response.json()
    setter(response)
}


export async function postApi(endpoint, formData) {
    axios({
        method: "post",
        url: endpoint,
        headers: { "content-type": "application/json" },
        data: formData
    })
}
