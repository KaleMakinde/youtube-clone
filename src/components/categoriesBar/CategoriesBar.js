import React, { useState } from 'react';
import "./_categoriesBar.scss";




const keywords = [
  'All', 'React js', 'Angular js', 'React Native', 'use of API', 'Redux', "Music", 'Algorithm Art', 'Guitar',
  'Bengali Songs', 'Coding', 'Cricket', 'Football', 'Real Madrid', 'Gatsby', 'Poor Coder', 'Shwetabh'
]




const CategoriesBar = () => {


  



const [activeElement,setActiveElement] =  useState('All')

  return (
    <div className="CategoriesBar">
      {keywords.map((value, i) =>(<span 
      
      onClick={ () => setActiveElement(value)}
      
      key={i}>{value}</span>
      ))}
    </div>
  )
}

export default CategoriesBar
