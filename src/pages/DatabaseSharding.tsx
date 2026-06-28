export function DatabaseSharding() {
    return (
        <article>
            <span className="article-meta">Chapter 05 — Data Partitioning</span>
            <h1>Database Sharding</h1>
            <p className="lead">
                Sharding splits a large database into smaller, independent pieces
                called shards, each holding a subset of the data, often spread across
                different physical servers.
            </p>

            <p>
                This lets a system scale beyond what a single database server could
                handle. When one machine's storage or throughput isn't enough, sharding
                lets you add more machines rather than upgrading a single one.
            </p>

            <h2>Common sharding strategies</h2>
            <p>
                <strong>Range-based sharding</strong> splits data by value ranges
                (e.g., user IDs 1–1000 on shard A, 1001–2000 on shard B) — simple, but
                can create uneven load if some ranges are accessed far more than
                others. <strong>Hash-based sharding</strong> applies a hash function
                to a key (like a user ID) to decide which shard it belongs to,
                spreading data more evenly but making range queries harder.{" "}
                <strong>Directory-based sharding</strong> keeps a lookup table mapping
                keys to shards, offering flexibility at the cost of an extra lookup
                step.
            </p>

            <figure>
                <img src="/images/database-sharding.png" alt="Database sharding diagram showing a table being split across multiple servers" />
                <figcaption>Fig. 1 — A single Users table split into three shards by User ID range, each hosted on a separate database server.</figcaption>
            </figure>

            <h2>The hard part</h2>
            <p>
                Sharding makes some operations significantly harder. A query that
                needs data from multiple shards (like "find all orders across all
                users above $100") now requires querying every shard and combining
                results, instead of one simple query. Joins across shards are
                especially painful, which is why sharded systems often denormalize
                data to avoid needing cross-shard joins at all.
            </p>

            <h2>The tradeoff</h2>
            <p>
                Sharding buys horizontal scalability at the cost of operational
                complexity — you're trading "one database to manage" for "many
                databases to keep in sync, monitor, and query across."
            </p>
        </article>
    );
}