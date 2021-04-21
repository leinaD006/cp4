<template>
<div class="userpage">
  <UserPosts />
</div>
</template>

<script>
import UserPosts from '@/components/UserPosts.vue';
export default {
  name: 'userpage',
  components: {
    UserPosts
  },
}
</script>

<style scoped>
.userpage {
  padding-top: 10px;
}
</style>