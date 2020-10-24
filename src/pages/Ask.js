import React , {useState} from "react"
import styled from 'styled-components'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import parse from "html-react-parser"

import backgroudImage1 from '../assets/Bigsur.jpg'
import backgroudImage2 from '../assets/Bigsur2.jpg'
import BackgroundBlock from '../components/BackgroudBlock'
import { Title, Subtitle } from '../components/Typography'
import "../components/EDITOR/App.css"

const Button = styled.button`
padding: 1rem 1.5rem ; 
background-color :transparent ;
border : #fff solid 1px ; 
border-radius : 8px ; 
color : #fff ; 
margin: 1rem ; 
cursor : pointer ;
transition : background-color .5s ;
text-transform : uppercase ; 

&:hover {
  background-color : #fff ;
  color: #000; 
}
`

function Ask () { 
  const [text,setText] =useState('')
  return (
    <div className ='container'>

    <Form/>
    <div className="App">
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
          const data = editor.getData()
          setText(data)
          }}
        />
    </div>

      <div>
        <h2>Content</h2>
        <p>{parse(text)}</p>
      </div>

    </div>


    

  </div>
  )
}
export default Ask
