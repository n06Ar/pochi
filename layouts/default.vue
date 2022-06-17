<template>
  <header class="header">
    <Toolbar><h1>Pochi</h1></Toolbar>
  </header>
  <main>
    <slot />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { useCommonStore } from '@store'
import Toolbar from 'primevue/toolbar'

const { title } = useCommonStore()
</script>

<style>
.header {
}
</style>
