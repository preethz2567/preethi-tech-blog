export function RateLimiting() {
    return (
        <article>
            <span className="article-meta">Chapter 08 — System Protection</span>
            <h1>Rate Limiting</h1>
            <p className="lead">
                Rate limiting restricts how many requests a client can make to a
                system within a given time window, protecting it from being
                overwhelmed.
            </p>

            <p>
                Whether it's a genuine traffic spike, a buggy client retrying too
                aggressively, or a deliberate abuse attempt — rate limiting is the
                guard at the gate.
            </p>

            <h2>Common algorithms</h2>
            <p>
                <strong>Fixed window</strong> allows a set number of requests per
                fixed time block (e.g., 100 requests per minute) — simple, but can
                allow a burst right at the window boundary.{" "}
                <strong>Sliding window</strong> smooths this out by tracking requests
                over a continuously moving time range instead of fixed blocks.{" "}
                <strong>Token bucket</strong> gives each client a "bucket" of tokens
                that refills at a steady rate; each request consumes a token, and
                requests are rejected once the bucket is empty — this allows
                occasional bursts while still enforcing an average rate.
            </p>

            <figure>
                <img src="/images/rate-limiting.png" alt="Token bucket algorithm diagram showing refill rate, bucket capacity, and request flow" />
                <figcaption>Fig. 1 — The Token Bucket algorithm: tokens are added at a steady rate. Each request consumes a token. When the bucket is empty, excess requests are rejected with HTTP 429.</figcaption>
            </figure>

            <h2>Where it's applied</h2>
            <p>
                Rate limiting can be applied per user, per IP address, per API key,
                or globally across an entire service — often several of these at
                once, layered, so one abusive client can't starve everyone else.
            </p>

            <h2>The tradeoff</h2>
            <p>
                Set limits too strict, and legitimate users get blocked unfairly.
                Set them too loose, and the system loses its protection against
                overload. Good rate limiting usually involves returning a clear
                signal (an HTTP <code>429</code> status, plus a "retry after" hint) so well-behaved
                clients know to back off and try again later.
            </p>
        </article>
    );
}