<template>
    <div>
    <Modal>
    <h3 slot="header" style="text-align:center">
      <span class="ModalTitle" style="margin-left:0px;">Model Info</span>
      <i class="fa fa-times closeModalBtn" @click="modalConfirm" style="float:right; font-size:23px; cursor:point"></i>
    </h3>
    <div slot="body">
        <div style="text-align:center;">
        <button id="modelChangeSubmit" :style="{background:applyState}" :disabled="modelChangeBtn" >Apply</button>
        <button id="modelChangeCancel" @click="modalConfirm">Cancel</button>
        </div>
  </div>
  </Modal>
    </div>
</template>

<script>
import Modal from "./Modal.vue";

export default({
  components: {
    Modal,
  },
  data: function () {
    return {
        showConfirmModal:true
    }
  },
  method:{
      modalConfirm() {
      this.showConfirmModal = false;
      this.$emit("modalConfirm","false")
      },

  }
})
</script>

<style scoped>

</style>
