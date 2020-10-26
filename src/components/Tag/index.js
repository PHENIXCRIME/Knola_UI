import React from 'react';
import { TagAll,TagName } from './TagElement';
import { Link } from 'react-router-dom';


const TagContent = () => {
  return (
    <>
        <TagName>
          <Link to='/tagmath'><TagAll>MATH</TagAll></Link>
          <Link to='/tagscience'><TagAll>SCIENCE</TagAll></Link>
          <Link to='/tagsocial'><TagAll>SOCIAL</TagAll></Link>
          <Link to='/taglanguage'><TagAll>LANGUAGE</TagAll></Link>
          <Link to='/taghuman'><TagAll>HUMAN</TagAll></Link>
          <Link to='/tagtechnology'><TagAll>TECH</TagAll></Link>
          <Link to='/tagpolitics'><TagAll>POLITICS</TagAll></Link>
          <Link to='/tagfood'><TagAll>FOOD</TagAll></Link>
          <Link to='/tagtravel'><TagAll>TRAVEL</TagAll></Link>
        </TagName>
    </>
  );
};

export default TagContent ;
