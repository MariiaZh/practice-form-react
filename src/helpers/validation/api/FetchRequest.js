
const FetchRequest = (url, param = '') => {

    return fetch(url + param,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
}

export default FetchRequest;