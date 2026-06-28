export function Caching() {
    return (
        <article>
            <span className="article-meta">Chapter 03 — Performance</span>
            <h1>Caching</h1>
            <p className="lead">
                Caching stores the result of an expensive operation so future requests
                for the same thing can be served instantly, without redoing the work.
            </p>

            <h2>Where caches live</h2>
            <p>
                <strong>Client-side</strong> (browser cache) avoids re-downloading
                assets. <strong>CDN caching</strong> serves static content from
                servers geographically close to the user. <strong>Application-level
                caching</strong> (like Redis or Memcached) sits between your app and
                your database, storing frequently accessed data in memory, which is
                far faster than disk-based database reads.
            </p>

            <figure>
                <img src="/images/caching.png" alt="Caching flow diagram showing cache hit and cache miss paths" />
                <figcaption>Fig. 1 — The caching flow: a request first checks the cache. On a hit, data is returned instantly. On a miss, the database is queried and the result is stored in cache.</figcaption>
            </figure>

            <h2>The hard part: invalidation</h2>
            <p>
                Caching is easy until the underlying data changes. A cache holding
                stale data is often worse than no cache at all, since users see
                outdated information believing it's current. Common strategies
                include setting a <strong>time-to-live (TTL)</strong> so entries expire automatically,
                or explicitly invalidating a cache entry the moment its source data
                changes.
            </p>

            <div className="callout">
                "There are only two hard things in Computer Science: cache invalidation
                and naming things."
            </div>

            <h2>The tradeoff</h2>
            <p>
                Caching trades a small amount of staleness for a large amount of
                speed. The right TTL depends entirely on how fresh the data needs to
                be — a stock price cache might need a TTL of seconds, while a user's
                profile picture URL might be safely cached for hours.
            </p>
        </article>
    );
}