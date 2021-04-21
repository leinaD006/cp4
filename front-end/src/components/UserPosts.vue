<template>
<div class="main">
  <div class="menu">
    <div class="rightMenu">
        <p><a @click="toggleUpload">Post</a></p>
    </div>
    <uploader :show="show" @close="close" @uploadFinished="uploadFinished" />
  </div>
  
    <posts-show :posts="posts" />
    <p v-if="error">{{error}}</p>
</div>
</template>

<script>
import axios from 'axios';
import Uploader from '@/components/Uploader.vue';
import PostsShow from './PostsShow.vue';
export default {
  name: 'UserPosts',
  components: {
    Uploader,
    PostsShow
  },
  data() {
    return {
      show: false,
      posts: [],
      error: '',
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        this.response = await axios.get("/api/posts/all");
        this.posts = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    close() {
      this.show = false;
    },
    toggleUpload() {
      this.show = true;
    },
    async uploadFinished() {
      this.show = false;
      this.getPosts();
    },
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}
.rightMenu {
    display: flex;
    justify-content: space-between;
}

.rightMenu p {
    padding-right: 10px;
}

.menu h2 {
  font-size: 14px;
}
</style>