export function LoadBalancing() {
    return (
        <article>
            <span className="article-meta">Chapter 02 — Traffic Distribution</span>
            <h1>Load Balancing</h1>
            <p className="lead">
                A load balancer sits between clients and your servers, distributing
                incoming requests across multiple server instances instead of letting
                one server take all the traffic.
            </p>

            <p>
                This improves both <strong>performance</strong> (no single server gets overwhelmed)
                and <strong>reliability</strong> (if one server goes down, traffic just routes to the
                others).
            </p>

            <h2>Common algorithms</h2>
            <p>
                <strong>Round robin</strong> sends each new request to the next
                server in a rotating list — simple, but doesn't account for servers
                being under different load. <strong>Least connections</strong> sends
                traffic to whichever server currently has the fewest active
                connections — better for requests with varying durations.{" "}
                <strong>IP hash</strong> routes a given client to the same server
                consistently, useful when a server is holding session-specific data.
            </p>

            <figure>
                <img src="/images/load-balancing.svg" alt="Load balancing architecture showing clients being distributed across multiple backend servers" />
                <figcaption>Fig. 1 — A load balancer distributes incoming client requests across a pool of backend servers using algorithms like Round Robin or Least Connections.</figcaption>
            </figure>

            <h2>Where it lives</h2>
            <p>
                Load balancers can sit at different layers: a hardware/DNS-level load
                balancer in front of an entire data center, or a software load
                balancer (like Nginx or a cloud provider's managed service) in front
                of a single application's server fleet. Many real systems use both,
                layered.
            </p>

            <h2>The tradeoff</h2>
            <p>
                Load balancing adds a hop and a point of coordination — if not set up
                with redundancy itself, the load balancer can become a single point
                of failure. Production setups typically run load balancers in pairs
                or clusters for this reason.
            </p>
        </article>
    );
}