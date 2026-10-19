export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string // ISO format e.g. "2025-05-15"
  readingTime: string // e.g. "5 min read"
  tags: string[]
  published: boolean
  featured?: boolean
  image?: string
  author?: {
    name: string
    handle?: string
  }
  content: string
}

export interface BlogNeighbours {
  previous: BlogPost | null
  next: BlogPost | null
}
