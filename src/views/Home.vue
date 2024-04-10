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
import { Navigation, Pagination } from 'swiper';
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';
import 'swiper/swiper-bundle.css';
import axios from 'axios';

SwiperCore.use([Navigation, Pagination,]);
@Component({
	name: 'Home',
	components: {
		Swiper,
		SwiperSlide,
	},
})
export default class Home extends Vue {

	protected mounted() {
		console.log('HomeVue mounted');
		this.apiTest();
	}

	public onSwiper () {
		console.log('onswiper');
	}

	public onSlideChange () {
		console.log('onSlideChange');
	}

	private apiTest() {
		console.log('axios Test');
		const options:any = {
			method: 'GET',
			url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=f54fde8b320e720ed31e18710d7b0f25',
			params: {language: 'kr-KR', page: '1',},
			headers: {
				accept: 'application/json',
			},
		};

		axios.request(options)
			.then((res) => {
				console.log('여기1');
				console.log(res);
			}).catch((err) => {
				console.log('여기2');
				console.log(err);
			});
			
	}

}
</script>
