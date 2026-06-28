export function MicroservicesVsMonolith() {
    return (
        <article>
            <span className="article-meta">Chapter 06 — Architecture Patterns</span>
            <h1>Microservices vs Monolith</h1>
            <p className="lead">
                A monolith is a single application containing all of a system's
                functionality, deployed as one unit. A microservices architecture
                splits that functionality into multiple independent services.
            </p>

            <h2>Why teams choose microservices</h2>
            <p>
                Independent services can be developed, deployed, and scaled
                separately — a team can ship a change to one service without
                redeploying the entire system. Different services can even use
                different tech stacks suited to their specific job (as in your own
                Quote Box project: a Flask service and a Node service, each doing
                what it's best at).
            </p>

            <h2>Why teams stay monolithic</h2>
            <p>
                Monoliths are simpler to develop, test, and deploy — there's one
                codebase, one deployment pipeline, no network calls between internal
                components, and no need to coordinate versioning across services.
                Many successful systems run as monoliths far longer than is commonly
                assumed.
            </p>

            <figure>
                <img src="/images/microservices-vs-monolith.png" alt="Side-by-side comparison of monolithic and microservices architectures" />
                <figcaption>Fig. 1 — Monolith (left): all logic in a single deployable unit. Microservices (right): each service is independent with its own database.</figcaption>
            </figure>

            <h2>The tradeoff</h2>
            <p>
                Microservices trade simplicity for flexibility and independent
                scalability — at the cost of operational overhead: network calls
                replace function calls, failures in one service can cascade,
                debugging across service boundaries is harder, and you need
                infrastructure (service discovery, monitoring, logging) that a
                monolith doesn't require.
            </p>

            <div className="callout">
                Most teams should default to a monolith until a specific, measured
                pain point justifies splitting it.
            </div>
        </article>
    );
}