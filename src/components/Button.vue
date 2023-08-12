<template>
  <div>
    <button class="bg-green-400 hover:bg-green-500 duration-300 font-sm text-white rounted py-1.5 px-4">
        <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
    name: 'button-vue'
}
</script>

<style>

</style>