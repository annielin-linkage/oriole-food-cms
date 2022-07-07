<template>
  <div
    class="flex justify-center items-center"
    style="height: 100vh; background-image: url('background.png'); background-size: 100% 100%"
  >
    <section class="column items-center">
      <!-- LOGO -->
      <div
        class="bg-white flex items-center justify-center"
        style="width: 150px; height: 150px; border-radius: 10rem"
      >
        <q-img no-spinner :src="$system.logo" width="90px" style="border-radius: 10px" />
      </div>

      <!-- Buttons -->
      <div class="column text-center q-gutter-y-lg" style="margin-top: 105px">
        <!-- Reprocessing Btn -->
        <q-btn
          no-caps
          unelevated
          size="md"
          color="yellow-8"
          class="text-caption"
          label="Reprocessing"
          style="width: 210px"
          @click="$router.push('/reprocessing')"
        />
        <!-- Delivery Order Btn -->
        <q-btn
          no-caps
          unelevated
          size="md"
          color="blue-4"
          class="text-caption"
          label="Delivery Order"
          style="width: 210px"
          @click="$router.push('/delivery_order')"
        />
      </div>
    </section>
  </div>
</template>
