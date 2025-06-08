/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    console.log('Post slug:', slug);
    import(`../posts/${slug}.md?raw`)
      .then(async (res) => {
        console.log('Dynamic import result (res.default):', res.default);
        const text = res.default;
        console.log('Fetched markdown text:', text);
        const { content, data } = matter(text);
        console.log('Parsed content:', content);
        console.log('Parsed meta data:', data);
        setContent(content);
        setMeta(data);
      })
      .catch((error) => {
        console.error('Error loading markdown post:', error);
      });
  }, [slug]);

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {meta.title}
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            {meta.date}
          </p>
        </div>

        {/* Featured Image */}
        {meta.image && (
          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <img 
              src={meta.image} 
              alt={meta.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none bg-white rounded-xl shadow-sm p-8">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-gray-900 mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-800 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
              li: ({node, ...props}) => <li className="text-gray-700 mb-2" {...props} />,
              a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default Post;