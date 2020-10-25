import React from 'react';
import { TagAll,TagName } from './TagElement';
import { Link } from 'react-router-dom';


const TagContent = () => {
  return (
    <>
        <TagName>
          <Link to='/tagmath'><TagAll>Math</TagAll></Link>
          <Link to='/tagscience'><TagAll>Science</TagAll></Link>
          <Link to='/tagsocial'><TagAll>Social</TagAll></Link>
          <Link to='/taglanguage'><TagAll>Language</TagAll></Link>
          <Link to='/taghuman'><TagAll>Human</TagAll></Link>
          <Link to='/tagtechnology'><TagAll>Technology</TagAll></Link>
          <Link to='/tagpolitics'><TagAll>Politics</TagAll></Link>
          <Link to='/tagfood'><TagAll>Food</TagAll></Link>
          <Link to='/tagtravel'><TagAll>Travel</TagAll></Link>
        </TagName>
    </>
  );
};

export default TagContent ;
