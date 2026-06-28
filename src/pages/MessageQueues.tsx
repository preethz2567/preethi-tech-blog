export function MessageQueues() {
    return (
        <article>
            <span className="article-meta">Chapter 07 — Async Communication</span>
            <h1>Message Queues</h1>
            <p className="lead">
                A message queue lets one part of a system send a message without
                waiting for another part to process it immediately. The sender drops
                the message in the queue and moves on.
            </p>

            <h2>Why this matters</h2>
            <p>
                Without a queue, a slow downstream operation (sending an email,
                resizing an image, processing a payment) blocks the user-facing
                request until it's done. With a queue, the user-facing request
                finishes instantly — "Your order is being processed" — while the slow
                work happens in the background.
            </p>

            <h2>Key properties</h2>
            <p>
                Queues typically guarantee that messages aren't lost even if a
                consumer crashes mid-processing (the message stays in the queue until
                confirmed as fully handled). Many also support multiple consumers
                processing in parallel, which lets the system absorb traffic spikes
                by simply processing the backlog a bit slower rather than failing
                outright.
            </p>

            <figure>
                <img src="/images/message-queues.svg" alt="Message queue architecture with producers, broker, and consumers" />
                <figcaption>Fig. 1 — Producers push messages into a queue (broker). Consumers pull and process messages independently, enabling asynchronous decoupling.</figcaption>
            </figure>

            <h2>The tradeoff</h2>
            <p>
                Queues introduce asynchronicity, which adds real complexity: the
                sender no longer knows exactly when (or sometimes if) something
                completed, error handling has to account for retries and duplicate
                processing, and you now have an extra piece of infrastructure to
                run and monitor.
            </p>
        </article>
    );
}