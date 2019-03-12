import axios from 'axios';

const state =  {
    tasks: []
}

const getters = {
    tasks: state => state.tasks
}

const mutations =  {
    setTasks: (state, payload) => {
        state.tasks = payload;
    }
}

const actions = {
    getTasks: async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if(!data) throw new Error('Loi');

        return data.map((item, index) => {
            const isFile = index % 3 === 0 ? true : false;
            return { ...item, isFile };
        });
    }
}

export default { state, getters, mutations, actions }