import React , {useState, useEffect} from 'react'

export default function GetTags() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/api/v1/tags")
      .then(res => res.json())
      .then(
        ({ data }) => {
          setIsLoaded(true);
          setTags(data);
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