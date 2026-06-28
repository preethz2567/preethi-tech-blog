export function CapTheorem() {
    return (
        <article>
            <span className="article-meta">Chapter 04 — Distributed Systems</span>
            <h1>CAP Theorem</h1>
            <p className="lead">
                The CAP theorem states that a distributed data system can only
                guarantee two out of three properties at the same time: Consistency,
                Availability, and Partition Tolerance.
            </p>

            <p>
                <strong>Consistency</strong> means every read gets the latest write.{" "}
                <strong>Availability</strong> means every request gets a response, even
                if it isn't the latest data. <strong>Partition tolerance</strong>{" "}
                means the system keeps working even if network communication between nodes
                breaks down.
            </p>

            <figure>
                <img src="/images/cap-theorem.png" alt="CAP Theorem triangle showing Consistency, Availability, and Partition Tolerance at each vertex" />
                <figcaption>Fig. 1 — The CAP triangle: distributed systems must choose two of three guarantees. Since partitions are inevitable, the real choice is between CP and AP.</figcaption>
            </figure>

            <h2>Why you can't have all three</h2>
            <p>
                In any real distributed system, network partitions (a temporary
                communication failure between servers) are inevitable — so
                partition tolerance isn't really optional. That leaves a genuine
                choice during a partition: respond with possibly-stale data
                (favoring availability), or refuse to respond until you can guarantee
                correctness (favoring consistency).
            </p>

            <h2>CP vs AP in practice</h2>
            <p>
                A <strong>CP system</strong> (like a traditional relational database
                cluster with strict consistency) will reject requests during a
                partition rather than risk returning wrong data. An{" "}
                <strong>AP system</strong> (like many NoSQL databases such as
                Cassandra) will keep responding during a partition, accepting that
                some nodes may briefly disagree, then reconcile afterward.
            </p>

            <h2>The tradeoff</h2>
            <p>
                Neither choice is universally "correct." A banking system processing
                transfers leans CP — wrong data is dangerous. A social media like
                counter leans AP — a few seconds of inconsistency is harmless, but
                the app going down isn't acceptable.
            </p>
        </article>
    );
}