const truncate = (text: string, size: number) => {
  let truncatedText = text
  if (text.length > size) {
    truncatedText = text.slice(0, size - 3) + '...'
  }
  return truncatedText
}

export default truncate
