<script lang="ts">
  import apolloFilter from './assets/apollo.svg?raw'
  import blurFilter from './assets/blur.svg?raw'
</script>

<main>
  <div id="svgContainer" hidden>
    {@html apolloFilter}
    {@html blurFilter}
  </div>
  <img class="apollo" alt="example" src="https://i.pravatar.cc/512?img=48"/>
  <img class="blur" alt="example" src="https://i.pravatar.cc/512?img=48"/>
</main>

<style>
  .apollo {
    filter: url(#Apollo);
  }
  .blur {
    filter: url(#blurMe);
  }
</style>
