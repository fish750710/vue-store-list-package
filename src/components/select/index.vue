<template>
  <div>
    <select
      :value="modelValue"
      @change="
        $emit('updateModelValue', $event.target.value);
        $emit('handleChange', $event);
      "
    >
      <option v-if="!subSelect" value="" disabled selected>--請選擇--</option>
      <option v-else value="" selected>--全部--</option>
      <option v-for="(item, index) in list" :value="item.name" :key="index">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: {
      type: String,
    },
    subSelect: {
      type: Boolean,
    },
  },
};
</script>
