<template>
  <div>
    <select
      :value="modelValue"
      @change="
        $emit('update:modelValue', $event.target.value);
        emit('handleChange', $event);
      "
    >
      <option v-if="!subSelect" value="" disabled selected>--請選擇--</option>
      <option v-else value="" selected>--全部--</option>
      <option v-for="(item, index) in listData" :value="item.name" :key="index">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core';

const props = defineProps({
  list: Object,
  modelValue: String,
  subSelect: Boolean,
});
const emit = defineEmits(['handleChange', 'update:modelValue']);
const listData = computed(() => props.list);
</script>

<style scoped></style>
