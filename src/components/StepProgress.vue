<template>
<div class="step-progress">
  <div class="number-in-circle">1</div>
  <div class="connector-line" v-bind:class="{ active: current >= 2}"></div>
  <div class="number-in-circle" v-bind:class="{ 'inactive-circle': current < 2}">2</div>
  <div class="connector-line" v-bind:class="{ active: current == 3}"></div>
  <div class="number-in-circle" v-bind:class="{ 'inactive-circle': current < 3}">3</div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'

.step-progress 
    display: inline-flex
    width: 100%
.connector-line
    height: 0px
    border: 1px solid #c8c8c8
    width: calc(50% - 60px)
    margin: 14px 10px
.active
    border-image-source: var(--theme-light-green-bg)
    border-image-width: auto


</style>
<script>
export default {
    props: {
        current: {
            type: Number,
            default: 1
        }
    }
}
</script>