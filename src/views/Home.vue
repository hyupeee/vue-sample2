<template>
  <div class="home">
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :pagination="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
      <swiper-slide>test</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Navigation, Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination])
@Component({
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
  }
})
export default class Home extends Vue {

  protected mounted() {
    console.log('HomeVue mounted');
  }

  public onSwiper () {
    console.log('onswiper');
  }

  public onSlideChange () {
    console.log('onSlideChange');
  }


}
</script>
