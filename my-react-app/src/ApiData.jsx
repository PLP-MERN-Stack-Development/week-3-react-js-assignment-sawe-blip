import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

export default function ApiData() {
  const [data, setData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) throw new Error('Failed to fetch')
        const result = await res.json()
        setData(result)
        setFiltered(result)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter by search
  useEffect(() => {
    const searchText = search.toLowerCase()
    const filteredResults = data.filter(post =>
      post.title.toLowerCase().includes(searchText)
    )
    setFiltered(filteredResults)
    setPage(1) // reset to first page when searching
  }, [search, data])

  const startIndex = (page - 1) * itemsPerPage
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(filtered.length / itemsPerPage)

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card title="Search Posts">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Card>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {!loading && !error && paginated.map(post => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <Button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>Prev</Button>
        <span className="py-2 px-4">{page} / {totalPages}</span>
        <Button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>Next</Button>
      </div>
    </div>
  )
}
