<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
          <h2>NioIcons</h2>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <input
            v-model="s"
            class="form-control"
            placeholder="Start typing to search..."
            @keyup="searchIcon(s)"
          />
        </div>
      </div>
      <div class="col-3" v-for="icon in filtered" :key="icon">
        <h5 class="text-primary icon ni" :class="`ni-${icon}`">
          <span class="ml-2 text-dark">&nbsp; {{ icon }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import icons from "../icons.json";

export default defineComponent({
  setup() {
    const filtered = ref(icons);
    const s = ref("");

    function searchIcon(str) {
      filtered.value = icons.filter((i) => i.includes(str));
    }

    return { s, filtered, searchIcon };
  },
});
</script>
