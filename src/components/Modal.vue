<script>
export default {
    emits: ["close"],
    props: {
        showModal: Boolean
    }
}
</script>

<template>
<transition name="fade" appear>
    <div class="modal-overlay" 
         v-if="showModal" 
         @click="this.$emit('close')"></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal" role="dialog" v-if="showModal">
        <span class="close" @click="this.$emit('close')">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="22.3638" y="11.0503" width="16" height="2" rx="1" transform="rotate(135 22.3638 11.0503)" fill="#FF761C"/>
              <rect x="11.0503" y="9.63599" width="16" height="2" rx="1" transform="rotate(45 11.0503 9.63599)" fill="#FF761C"/>
            </svg>
        </span>
        <slot name="content"></slot>
    </div>
  </transition>
</template>
<style scoped>
.button {
  border: none;
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1.8rem;
  padding: .5em 1em;
  border-radius: .3em;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  padding: 64px 112px 64px 112px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}
.modal .close {
  float: right;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background:rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>