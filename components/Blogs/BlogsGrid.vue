<template>
  <section class="blog-grid">
    <div class="container">
      <div class="row">
        <Blog
          v-for="blog in blogs"
          :key="blog.slug.current"
          :blogImage="urlFor(blog.image).url()"
          :blogTitle="blog.title"
          :blogDesc="blog.description"
          :blogLink="'/blogs/' + blog.slug.current"
        />
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <!-- Pagination here -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Blog from "./Blog.vue";
import { client } from '@/plugins/client.js'; // Adjust the path
import { urlFor } from '@/plugins/urlImage.js'; // Adjust the path

export default {
  components: { Blog },
  data() {
    return {
      blogs: [],
    };
  },
  async created() {
    // Fetch data from Sanity
    try {
      this.blogs = await client.fetch(`*[_type == "blog"]`);
      console.log(this.blogs[0].image.asset)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    urlFor,
  },
};
</script>
