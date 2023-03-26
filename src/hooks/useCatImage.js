import { useEffect, useState } from 'react'

const CAT_PREFIX_IMG_URL = 'https://cataas.com/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // get image
  useEffect(() => {
    if (!fact) return
    // const firstWord = fact.split(' ').slice(0, 3).join(' ');
    const threeFirtWords = fact.split(' ', 3).join(' ')

    async function getCatImage () {
      const res = await fetch(
        `${CAT_PREFIX_IMG_URL}cat/says/${threeFirtWords}?size=50&color=red&json=true`
      )
      const data = await res.json()
      const { url } = data
      const urlWithPrefix = `${CAT_PREFIX_IMG_URL}${url}`
      setImageUrl(urlWithPrefix)
    }
    getCatImage()
  }, [fact])

  return { imageUrl }
}
