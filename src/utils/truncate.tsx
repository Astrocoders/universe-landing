const truncate = (text: string, size: number) => (text.length > size ? text.slice(0, size - 3) + '...' : text)
export default truncate
