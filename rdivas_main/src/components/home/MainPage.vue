<template>
  <section class="top">
    <div class="banner-wrap">
      <ul class="banner-con" id="banner-con">
        <li class="banner" v-for="banner in banImgs" :key="banner.id">
          <img :src="imgHost + banner.image" alt="" />
        </li>
      </ul>
      <div class="icons">
        <div class="icon" @click="rightClick">
          <i class="bx bx-chevron-right" />
        </div>
        <div class="icon" @click="leftClick">
          <i class="bx bx-chevron-left" />
        </div>
      </div>
    </div>
    <div class="cat-title">
      <h2>CATEGORIES</h2>
      <div class="ctbx" />
    </div>
    <div class="flex-wrap">
      <cat-box
        v-for="cat in cats"
        :key="cat.id"
        :name="cat.name"
        :img="cat.image"
        :id="cat.id"
        :cat="cat.mainCategory"
      />
    </div>
    <div class="pad1">
      <best-sell-cat
        v-for="(item, index) in list"
        :key="item.id"
        :index="index"
        :title="item.name"
        :products="item.products"
        :poster1="poster1"
        :poster2="poster2"
      />
    </div>
  </section>
</template>

<script>
import BestSellCat from "./BestSellCat.vue";
import CatBox from "./CatBox.vue";
export default {
  components: { CatBox, BestSellCat },

  data() {
    return {
      xd: null,
      cats: [],
      list: [],
      banImgs: [],
      poster1: null,
      poster2: null,
      a: 0,
    };
  },

  created() {
    fetch(`${this.$store.getters.host}/get/home/categories`)
      .then((response) => response.json())
      .then((data) => {
        this.cats = data.catagory;
      });
    fetch(`${this.$store.getters.host}/get/home/listing`)
      .then((response) => response.json())
      .then((data) => {
        this.list = data;
      });
    this.timer = setInterval(() => {
      this.rightClick();
    }, 5000);
    fetch(`${this.$store.getters.host}/get/home/hero`)
      .then((response) => response.json())
      .then((data) => {
        this.banImgs = data;
      });
    fetch(`${this.$store.getters.host}/get/home/poster`)
      .then((response) => response.json())
      .then((data) => {
        this.poster1 = data[0].image;
        this.poster2 = data[1].image;
      });
  },
  unmounted() {
    clearInterval(this.timer);
  },
  computed: {
    imgHost() {
      return this.$store.getters.imgHost;
    },
  },
  methods: {
    async rightClick() {
      const slidesContainer = document.getElementById("banner-con");
      const slide = document.querySelector(".banner");
      const slideWidth = slide.clientWidth;
      this.a += slideWidth;
      if (this.a > (this.banImgs.length - 1) * slideWidth) {
        this.a = 0;
        slidesContainer.scrollLeft = 0;
        return;
      }
      slidesContainer.scrollLeft += slideWidth;
    },
    leftClick() {
      const slidesContainer = document.getElementById("banner-con");
      const slide = document.querySelector(".banner");
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    },
  },
};
</script>

<style scoped>
.banner-wrap {
  width: 100%;
  margin-bottom: 3vh;
  position: relative;
  overflow: hidden;
}

.banner-con {
  height: calc(100vh - 2rem);
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  flex: 1 0 100%;
}

.banner img {
  width: 100%;
  height: 100%;
}

.icons {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.icon {
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  background: rgba(255, 255, 255, 0.384);
  color: #111111;
  margin: 20% 0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;
}

.icon i {
  font-size: 1.8rem;
}

.icon:hover {
  background-color: black;
  color: white;
}

.pad1 {
  padding: 0 1%;
}

.spot {
  margin-top: 2rem;
  width: 100%;
  column-gap: 2%;
}

.spot > * {
  margin-top: 2%;
}

.img {
  width: 23.5%;
}

.img img {
  width: 100%;
  height: 100%;
}
.cat-title {
  text-align: center;
  margin-top: 8vh;
  margin-bottom: 6vh;
  position: relative;
}
.cat-title h2 {
  font-size: 2.2rem;
  font-weight: 600;
  color: #111111;
  letter-spacing: 6px;
}
.ctbx {
  width: calc(6vh + 8.5rem);
  height: 3.5rem;
  background-color: var(--left-login);
  position: absolute;
  bottom: -0.2rem;
  right: 39.5vw;
  z-index: -1;
  border-radius: 1rem;
}
.title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
}
@media (max-width: 768px) {
  .banner-wrap {
    width: 100%;
    margin-bottom: 3vh;
    position: relative;
    overflow: hidden;
  }

  .banner-con {
    width: 100%;
    height: calc(100vw / 2);
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    overflow: hidden;
  }

  .banner {
    width: 100%;
    height: 100%;
    flex: 1 0 100%;
  }

  .banner img {
    width: 100%;
    height: 100%;
  }
  .icon {
    width: 1.8rem;
    height: 1.8rem;
  }

  .icon i {
    font-size: 1.2rem;
  }
  .cat-title {
    text-align: center;
    margin: 6vh 0;
    position: relative;
  }
  .cat-title h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #111111;
    letter-spacing: 6px;
  }
  .ctbx {
    width: calc(6vh + 7.5rem);
    height: 3rem;
    background-color: var(--left-login);
    position: absolute;
    bottom: 0rem;
    left: 43.2vw;
    z-index: -1;
    border-radius: 1rem;
  }
}
</style>
