import { useEffect, useState } from "react";

function PostsList() {
 const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");

 useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        setPosts(data);
      } catch (err) {
        setError("Could not load posts.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  console.log(posts);
  
   if (loading) {
    return (
      <p className="p-6 text-center text-gray-600">
        Loading posts...
      </p>
    );
  }

   if (error) {
    return (
      <p className="p-6 text-center text-red-600">
        {error}
      </p>
    );
  }
    return (
   
             <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Latest Posts
      </h1>
 <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
    
  </svg>
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <p className="mb-2 text-sm text-gray-500">
              Post #{post.id}
            </p>

            <h2 className="mb-3 text-lg font-bold capitalize">
              {post.title}
            </h2>

            <p className="text-gray-600">
              {post.body}
            </p>
          </article>
        ))}
      </div>
    </main>
      
    )
    
}

export default PostsList