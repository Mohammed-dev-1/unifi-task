<template>
  <div>
    <div class="height-100 background-main overflow-hidden">
      <router-view :key="$route.fullpath" />
      <BaseAlert />
    </div>

    <!-- <BaseLoader /> -->
  </div>
</template>