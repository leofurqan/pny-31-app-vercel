import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>Products Page</h1>
      <Image src="/image.jpg" width={800} height={500}/>
      <Image src="/mountains.jpg" width={800} height={500}/>
      <Image src="/2.jpeg" width={800} height={500}/>
    </div>
  )
}
