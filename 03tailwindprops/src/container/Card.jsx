import React from 'react'

// const mystyle = {
//   color: 'yellow'
// };

const Card = ({username = "SB", post = "Historian", place = "Ranchi", url = "https://i.pinimg.com/236x/36/9c/8e/369c8ed229707aaa0c189bb126114595.jpg"}) => {
  return (
    <div>
        
Docs
Components
Blog
Showcase
Theme
Tailwind CSS on GitHub
Rapidly build modern websites without ever leaving your HTML.
A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

Get started

Quick search...
Ctrl K
<figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src={url} alt="Is it still not showing"  />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medi">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam mollitia atq
      </p>
    </blockquote>
    <figcaption>
      <div  style={{color: 'black', backgroundColor: 'pink', border: '4px solid #a103fc', borderRadius: '20px'}}>
        {username}
      </div>
      <div>
        {post}, {place}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card