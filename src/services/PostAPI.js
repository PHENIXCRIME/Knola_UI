import axios from 'axios'

export default function PostAPI(values,setErrors) {
  console.log(values)
    axios ( {
      url: 'http://127.0.0.1:3333/api/v1/blogs',
      method: 'post',
      data: {
        "blog_title": values.title,
        "blog_content": values.content,
        "tag_id": values.tag_id,
        "user_id": values.user_id,
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response) 
      if (response.data.status!=200){
        setErrors(response.data.error)
    }})
}
