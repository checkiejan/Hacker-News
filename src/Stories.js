import React from 'react'

import { useGlobalContext } from './context'




const Stories = () => {
  const {display, loading, removeItem} = useGlobalContext();
  // console.log(Array.isArray(display.hits));
  if(loading){
    return <div className='loading'></div>
  }
  return <section className='stories'>
    {Array.isArray(display)&&display.map((item, index) => {
      const {
        title,
        url,
        points,
        _tags,
        num_comments
      } = item;
      return <article key={index} className='story'>
        <h4 className='title'>{title}</h4>
        <p className='info'>
          {points} points by <span>{_tags[1]} | </span> {num_comments} comments
        </p>
        <div>
          <a
          href={url}
          className='read-link'
          target='_blank'
          >
            read more
          </a>
          <button className='remove-btn' onClick={()=>removeItem(title)}>remove</button>
        </div>
      </article>
    })}
  </section>
}

export default Stories
 