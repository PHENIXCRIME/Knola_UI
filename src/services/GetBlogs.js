import React , {useState, useEffect} from 'react'

export default function GetBlogs() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/api/v1/blogs")
      .then(res => res.json())
      .then(
        ({ data }) => {
          setIsLoaded(true);
          setBlogs(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <> 
        <ul>
        {blogs.map(blog => (
          <li key={blog.blog_id}>
            {blog.blog_title} {blog.blog_content} {blog.blog_date}
          </li>
        ))}
        </ul>
      </>
    )
  }
}