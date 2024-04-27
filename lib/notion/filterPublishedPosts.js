export default function filterPublishedPosts({ posts, includePages, weeklyPages }) {
  if (!posts || !posts.length) return []
  return posts
    .filter(post =>
      includePages
        ? weeklyPages
          ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page' || post?.type?.[0] === 'Weekly'
          : post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page'
        : weeklyPages 
          ? post?.type?.[0] === 'Weekly'
          : post?.type?.[0] === 'Post'
    )
    .filter(post =>
      post.title &&
      post.slug &&
      post?.status?.[0] === 'Published' &&
      post.date <= new Date()
    )
}
