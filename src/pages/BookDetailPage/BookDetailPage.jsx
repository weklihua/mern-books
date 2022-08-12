export default function BookDetailPage({ data }) {
  return (
    <>
    <h1>BookDetailPage</h1>
    <div>{data.name}</div>
    <div>{data.author}</div>
    <div>{data.reviews}</div>
    
    </>
  )
}