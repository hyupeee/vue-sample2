<template>
  <div class="home">
    helloworld
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Home',
})
export default class Home extends Vue {

  protected mounted() {
    console.log('HomeVue mounted');
  }

}
</script>
