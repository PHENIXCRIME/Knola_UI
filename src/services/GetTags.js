import React , {useState, useEffect} from 'react'
import axios from 'axios'

export default function GetTags() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tags, setTags] = useState([]);


  useEffect(() => {
    axios ( {
      url: '/tags',
      method: 'get',
      baseURL: 'http://127.0.0.1:3333/api/v1/',
      responseType: 'json', 
    }).then(response => setTags(response.data.data)).catch(error =>  
      setError(error.message)
    ).finally(setIsLoaded(true))
  },[])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading..........</div>;
  } else {
    return (
      <> 
        <ul>
        {tags.map(tag => (
          <li key={tag.tag_id}>
            {tag.tag_name}
          </li>
        ))}
        </ul>
      </>
    )
  }
}