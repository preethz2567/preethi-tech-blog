export function Home() {
    return (
        <article>
            <span className="article-meta">Chapter 01 — Introduction</span>
            <h1>What is System Design?</h1>
            <p className="lead">
                System design is the process of defining the architecture, components,
                and data flow of a software system to satisfy specific requirements —
                both functional and non-functional.
            </p>

            <h2>Why it matters</h2>
            <p>
                Writing code that works for one user on your laptop is very different
                from building a system that serves millions of users reliably. System
                design is about making deliberate tradeoffs: consistency vs
                availability, latency vs throughput, simplicity vs flexibility. There
                is rarely one "correct" answer — only tradeoffs suited to a given
                scale and use case.
            </p>

            <figure>
                <img src="/images/system-design.png" alt="High-level system design architecture showing clients, load balancer, servers, cache, and database" />
                <figcaption>Fig. 1 — A typical high-level system architecture: clients connect through a load balancer to application servers, backed by a cache layer and database.</figcaption>
            </figure>

            <h2>Core building blocks</h2>
            <p>
                Most real-world systems are built from a recurring set of concepts:
                distributing traffic across servers (<strong>load balancing</strong>), avoiding
                repeated expensive work (<strong>caching</strong>), deciding how a system behaves
                during network failures (<strong>the CAP theorem</strong>), splitting large datasets
                across machines (<strong>sharding</strong>), choosing between one unified codebase or
                many small services (<strong>microservices vs monolith</strong>), decoupling work with
                asynchronous messaging (<strong>message queues</strong>), and protecting systems from
                being overwhelmed (<strong>rate limiting</strong>).
            </p>

            <div className="callout">
                "There are only two hard things in Computer Science: cache invalidation
                and naming things." — Phil Karlton
            </div>

            <p>
                Each of these is covered as its own chapter in this guide — read them
                in order, or jump to whichever concept you're working through right
                now.
            </p>
        </article>
    );
}