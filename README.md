# Laravel Api Setup for Different Domains

For example:

- Frontend: `http://localhost:3000`
- Backend: `http://portfolio.test`


### Next.js Setup

```js
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/backend/:path*',
                destination: 'http://portfolio.test/:path*',
            },
        ]
    },
}

module.exports = nextConfig
```

**Axios Base URL**

```js
const axios = Axios.create({
    baseURL: '/backend',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
})
```

### Laravel Setup `.env ` 

```bash
APP_URL=http://portfolio.test
FRONTEND_URL=http://localhost:3000
SANCTUM_STATEFUL_DOMAINS=localhost:3000,nextjs.test,vuejs.test
SESSION_DOMAIN=null
```

`http` `https://` `/` not allowed in sanctum domains
