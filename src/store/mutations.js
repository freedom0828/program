let mutations = {
    getToken(state,payload){     
        state.token = payload;
    },
    getUser(state,payload){
        state.username = payload;
    },
    saveInputStatus(state,payload){
        console.log(payload)
        state.statusInput = payload
    }
}

export default mutations