<template>
  <div>
    <PageTitle :pageHeading="blog.title" pageSubHeading="blogs" />
    <BlogDetail
      :blogImage="getBlogImageUrl"
      :blogTitle="blog.title"
      :detailDesc="blog.detailDesc"
    />
  </div>
</template>

<script>
import BlogDetail from "../../components/BlogDetail/BlogDetail";
import { client } from '../../plugins/client.js'; // Adjust the path
import { urlFor } from '../../plugins/urlImage.js'; // Adjust the path

export default {
  components: { BlogDetail },
  data() {
    return {
      blog: {},
    };
  },
  async created() {
    // Fetch data from Sanity based on slug
    const slug = this.$route.params.slug;
    try {
      this.blog = await client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, { slug });
      console.log(slug, this.blog);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  computed: {
    getBlogImageUrl() {
      return this.blog.image ? urlFor(this.blog.image).url() : '';
    },
  },
};
</script>
