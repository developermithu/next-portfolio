import PostContent from './PostContent'

export async function generateMetadata({ params }) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${params.slug}`)
        const data = await response.json()
        const post = data.post
        
        return {
            title: post.title,
            description: post.excerpt || post.title,
            keywords: post.tags?.map(tag => tag.name).join(', '),
            authors: [{ name: post.author?.name || 'Mithu' }],
            openGraph: {
                title: post.title,
                description: post.excerpt,
                type: 'article',
                publishedTime: post.created_at,
                modifiedTime: post.updated_at,
                authors: [post.author?.name || 'Mithu'],
                tags: post.tags?.map(tag => tag.name),
                // images: [
                //     {
                //         url: post.featured_image || '/og-image.jpg',
                //         width: 1200,
                //         height: 630,
                //         alt: post.title,
                //     },
                // ],
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: post.excerpt,
                // images: [post.featured_image || '/og-image.jpg'],
            },
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/posts/${params.slug}`,
            },
        }
    } catch (error) {
        // console.error('Error fetching post metadata:', error)
        return {
            title: 'Blog Post | Developer Mithu',
            description: 'Read our latest blog posts about web development and programming',
        }
    }
}

export default function PostPage({ params }) {
    return <PostContent slug={params.slug} />
}