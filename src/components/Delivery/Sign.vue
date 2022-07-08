<template>
  <div id="signContainer" class="sign-box bg-grey-2 relative-position">
    <div class="absolute-top-left text-grey-7 text-caption q-px-xs">customer signature</div>
    <canvas class="canvas" />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import SignaturePad from 'signature_pad';
export default {
  setup() {
    const data = reactive({
      signaturePad: null,
      signature_value: null,
    });

    function init() {
      let canvas = document.querySelector('.canvas');
      data.signaturePad = new SignaturePad(canvas, {
        minWidth: 2,
        maxWidth: 2,
        penColor: 'rgb(0, 0, 0)',
      });

      canvas.width = document.getElementById('signContainer').offsetWidth;
    }

    onMounted(() => {
      init();
    });
    return { ...toRefs(data) };
  },
};
</script>

<style lang="scss" scoped>
.sign-box {
  width: 100%;
  height: 150px;
  border: 1px solid $grey-3;
  border-radius: 3px;
}
</style>
