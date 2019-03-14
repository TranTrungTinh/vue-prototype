import axios from 'axios';

const state =  {
    workers: []
}

const getters = {
    workers: state => state.workers,
}

const mutations =  {
    setWorkers: (state, payload) => {
        state.workers = payload;
    }
}

const actions = {
    getWorkers: async ({ commit }) => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        if(!data) throw new Error('Loi');
        const tags = ['developer', 'interpreter'];
        return data.map(worker => {
            return { 
                ...worker, tags, status: false,
                address: `${worker.address.street}, ${worker.address.city}` 
            }
        });
        // .then(({ data }) => commit('setWorkers', data))
        // .catch(err => console.log(err))
    }
}

export default { state, getters, mutations, actions }