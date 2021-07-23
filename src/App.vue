<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  setup() {
    onMounted((): void => {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        document.documentElement.setAttribute("", "");
      } else if (
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        document.documentElement.setAttribute("data-footer", "true");
        document.documentElement.setAttribute(
          "data-override",
          "{'attributes': {'placement': 'vertical', 'layout': 'boxed' }, 'storagePrefix': 'ecommerce-platform'}"
        );
        document.documentElement.setAttribute("data-placement", "horizontal");
        document.documentElement.setAttribute("data-behaviour", "pinned");
        document.documentElement.setAttribute("data-layout", "boxed");
        document.documentElement.setAttribute("data-radius", "rounded");
        document.documentElement.setAttribute("data-color", "dark-blue");
        document.documentElement.setAttribute("data-navcolor", "dark");
        document.documentElement.setAttribute("data-show", "true");
        document.documentElement.setAttribute("data-dimension", "mobile");
      } else {
        document.documentElement.setAttribute("", "");
      }
    });
  },
});
</script>
