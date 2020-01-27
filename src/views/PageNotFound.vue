<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Oops!</h1>
    <p class="text-large" :class="$style.textLarge">
      The page you looking for is not found
      <router-link :to="{ name: 'Home' }">
        Back to home!
      </router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.centered {
  text-align: center;
}
.headingLarge {
  font-size: 70px;
}
.textLarge {
  font-size: 20px;
  font-weight: 100;
}
</style>
