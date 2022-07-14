import React from 'react'
import { useParams } from 'react-router-dom';
export default function Home() {
  let { name } = useParams();
  return (
    <div>
      <h4 className="title mb-4 fw-bolder">{name}</h4>
    </div>
  )
}
