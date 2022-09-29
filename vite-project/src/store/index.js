import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            infoData:null
        }
    },
    mutations: {
        SETINFODATA(state,infodata) {
            state.infoData = infodata
        }
    }
})

export default store