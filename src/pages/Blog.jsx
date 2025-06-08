import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const files = import.meta.glob('../posts/*.md');

    Promise.all(
      Object.entries(files).map(async ([path, resolver]) => {
        console.log('Processing file:', path);
        const content = await resolver();
        const text = await fetch(content.default).then((res) => res.text());
        const { data } = matter(text);
        console.log('Parsed front matter:', data);

        return {
          ...data,
          slug: path
            .split('/')
            .pop()
            .replace('.md', ''),
        };
      })
    ).then((loadedPosts) => {
      console.log('Loaded posts:', loadedPosts);
      setPosts(loadedPosts);
    });
  }, []);

  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/blog-bg.jpg)' }}
    >
      <div className="bg-opacity-50 min-h-screen p-8">
        <h1 className="text-5xl font-bold text-center mb-8 text-black">Travel Blog</h1>
        <div className="grid gap-4 max-w-4xl mx-auto">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug}>
              <div className="p-6 border rounded-lg bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;