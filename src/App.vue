<script setup lang="ts">

import {useCounterStore} from "@/stores/counter";
import {computed} from "vue";

const countStore = useCounterStore();
const count = computed(
    (): number => {
      return countStore.count
    }
)
const doubleCount = computed(
    (): number => {
      return countStore.doubleCount
    }
)

const onIncrementClick = () => {
  countStore.increment()
}

</script>

<template>
  <p>現在のポイント: {{ count }}</p>
    <p>現在のポイントさらにバイ: {{doubleCount}}</p>
  <button v-on:click="onIncrementClick">加算</button>
</template>