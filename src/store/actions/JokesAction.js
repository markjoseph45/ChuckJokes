import Axios from 'axios'
Axios.defaults.baseURL = "https://api.chucknorris.io/jokes";
// import Store from "./../../store";


export const getAllJokes = () => {

    return (dispatch, getState) => {

        return Axios({
            method: 'get',
            url: '/search?query=all'
        })
        .then(res => {
            return dispatch({
                type: 'COLLECTION',
                payload: res.data.result
            })
        })
        .catch(error => {
            console.log(`ERROR ---> ${error}`)
            return false
        })

    }
}