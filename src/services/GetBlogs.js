import React , {useState, useEffect} from 'react'
import axios from 'axios'

export default function GetBlogs() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios ( {
      url: '/blogs',
      method: 'get',
      baseURL: 'http://127.0.0.1:3333/api/v1/',
      responseType: 'json', 
    }).then(response => setBlogs(response.data.data)).catch(error =>  
      setError(error.message)
    ).finally(setIsLoaded(true))
  },[])

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