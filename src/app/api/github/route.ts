import { NextResponse } from "next/server"

// Verified real fallback data in case GitHub API rate limits or network issues occur
const VERIFIED_FALLBACK = {
  user: {
    login: "abhiramas08",
    name: "Abhiram A S",
    html_url: "https://github.com/abhiramas08",
    avatar_url: "https://avatars.githubusercontent.com/u/218334821?v=4",
    public_repos: 1,
    followers: 1,
    following: 0,
    created_at: "2025-06-28T05:00:30Z",
  },
  repos: [
    {
      id: 1009979876,
      name: "ace-college-drone-robotics-workshop",
      full_name: "abhiramas08/ace-college-drone-robotics-workshop",
      html_url:
        "https://github.com/abhiramas08/ace-college-drone-robotics-workshop",
      description: "Drone and Robotics Workshop at ACE College",
      stargazers_count: 0,
      forks_count: 0,
      language: "Embedded C / Arduino",
      default_branch: "main",
      updated_at: "2025-06-28T05:02:34Z",
      fork: true,
    },
  ],
  isFallback: true,
}

export async function GET() {
  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  }

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Abhiram-Portfolio-App",
  }

  // Keep private token strictly server-side if provided in environment
  const token = process.env.GITHUB_TOKEN
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  try {
    // Fetch profile and repos with 1-hour cache
    const [userRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/users/abhiramas08", {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/users/abhiramas08/repos?sort=updated&per_page=10", {
        headers,
        next: { revalidate: 3600 },
      }),
    ])

    // Handle rate limits or API errors
    if (!userRes.ok || !reposRes.ok) {
      const isRateLimited =
        userRes.status === 403 ||
        reposRes.status === 403 ||
        userRes.headers.get("x-ratelimit-remaining") === "0"

      return NextResponse.json({
        ...VERIFIED_FALLBACK,
        isRateLimited,
        error: `GitHub API responded with status ${userRes.status}/${reposRes.status}`,
      })
    }

    const userData = await userRes.json()
    const reposData = await reposRes.json()

    interface RawGitHubRepo {
      id: number
      name: string
      full_name: string
      html_url: string
      description: string | null
      stargazers_count: number
      forks_count: number
      language: string | null
      default_branch: string
      updated_at: string
      fork: boolean
    }

    // Map only verified real repository fields
    const repos = Array.isArray(reposData)
      ? (reposData as RawGitHubRepo[]).map((repo) => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          html_url: repo.html_url,
          description: repo.description || "No description provided.",
          stargazers_count: repo.stargazers_count ?? 0,
          forks_count: repo.forks_count ?? 0,
          language: repo.language || "Arduino / Embedded",
          default_branch: repo.default_branch || "main",
          updated_at: repo.updated_at,
          fork: repo.fork,
        }))
      : VERIFIED_FALLBACK.repos

    return NextResponse.json({
      user: {
        login: userData.login,
        name: userData.name || "Abhiram A S",
        html_url: userData.html_url,
        avatar_url: userData.avatar_url,
        public_repos: userData.public_repos ?? 1,
        followers: userData.followers ?? 1,
        following: userData.following ?? 0,
        created_at: userData.created_at,
      },
      repos,
      isFallback: false,
      isRateLimited: false,
    })
  } catch (error) {
    // In case of local proxy SSL or network timeout, gracefully return verified data
    return NextResponse.json({
      ...VERIFIED_FALLBACK,
      isRateLimited: false,
      error: error instanceof Error ? error.message : "Network error",
    })
  }
}
