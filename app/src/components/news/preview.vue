<template>
  <div class="grid grid-cols-6 gap-2">
    <div v-for="(item, index) in [1, 2, 3]" class="col-span-6 md:col-span-2">
      <section class="card px-2 py-2 bg-gray-300 border border-black">
        <img
          src="https://via.placeholder.com/480x320.png?text=MkaY+Development"
          alt=""
        />
        <h2 class="font-bold mt-2 mb-2">Test</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          accusamus nobis at corrupti aspernatur ratione maiores optio itaque.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup></script>
