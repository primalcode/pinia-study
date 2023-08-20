<script setup lang="ts">

import {useCounterStore} from "@/stores/counter2";
import {computed} from "vue";

const countStore = useCounterStore();
const count = computed(
    (): number => {
      return countStore.counter
    }
)
const singleCount = computed(
    (): number => {
      return countStore.singleCount
    }
)
const doubleCount = computed(
    (): number => {
      return countStore.doubleCount
    }
)
const tripleCount = computed(
    (): number => {
      return countStore.tripleCount
    }
)

const onIncrementClick = () => {
  countStore.increment()
}

</script>

<template>
  <p>現在のポイント: {{ singleCount }}</p>
  <p>現在のポイントさらに倍: {{ doubleCount }}</p>
  <p>現在のポイントさらに3倍: {{ tripleCount }}</p>
  <button v-on:click="onIncrementClick">加算</button>
</template>