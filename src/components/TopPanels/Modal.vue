<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> default header </slot>
          </div>

          <div class="modal-body">
            <slot name="body"> default body </slot>
          </div>

          <!-- <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')" style="color:black">
                close
              </button>
            </slot>
          </div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-header h3 {
  margin-top: 0;
  color: #38e09a;
  font-size: 25px;
  line-height: 25px;
}

.modal-body {
  margin: 15px 0;
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-body,
.modal {
  color: #666 !important;
}
.modal-container{
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #111217;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  z-index: 99;
}
.v-data-footer__select{
  display:none
}
.v-data-table__wrapper {
  height: 250px;
  margin: 10px;
}
.v-data-table__wrapper{
  overflow-x: hidden;
  overflow-y: scroll;
}
.v-data-table__wrapper::-webkit-scrollbar {
  background-color: #1E1E1E;
  width: 8px;
}
.v-data-table__wrapper::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 10px;
}
.v-data-table__wrapper::-webkit-scrollbar-track {
  background-color: #1E1E1E;
}
.v-data-footer{
  display: none;
}
</style>