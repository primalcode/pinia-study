import {defineStore} from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: 0
    }),
    getters: {
        singleCount: (state) => state.counter,
        doubleCount: (state) => state.counter * 2,
        tripleCount: (state) => state.counter * 3,
    },
    actions: {
        increment() {
            this.counter++
        }
    },
});