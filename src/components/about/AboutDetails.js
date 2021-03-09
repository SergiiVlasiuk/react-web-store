// import React from 'react'

import { useParams } from 'react-router-dom'

export const AboutDetails = () => {
  let { topicId } = useParams()
  console.log('AboutDetails: topicId', topicId)
  return (
    <>
      <div>{topicId}</div>
    </>
  )
}
