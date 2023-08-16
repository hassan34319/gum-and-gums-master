
import {createClient} from '@sanity/client';

// Initialize a Sanity client
export const client = createClient({
  dataset: "production",
  token: "skpU5rlal2z4LXx1yb2hQ1Hr3tPJjXXdWgDYIjxCI9Ncon8XLtD22A1wYRZplvNuHh4oUOwYIRhYaBCpYs8SQPan3NR3LVNmkHs4GCa1g51VJRqgHqC8lDbhpBbZseqgpf5zu3OOTXu8iQXXHi8eknfijlZNpYnnj4TX9Pzlu0pFjY52qJbk", 
  projectId: 'kj9tzlf1',
  apiVersion: "2023-05-30", // Learn more: https://www.sanity.io/docs/api-versioning
  useCdn: false,// Enable this for production
});

console.log("I WAS HERE")