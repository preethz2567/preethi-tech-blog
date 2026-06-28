import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "What is System Design?" },
    { to: "/load-balancing", label: "Load Balancing" },
    { to: "/caching", label: "Caching" },
    { to: "/cap-theorem", label: "CAP Theorem" },
    { to: "/database-sharding", label: "Database Sharding" },
    { to: "/microservices-vs-monolith", label: "Microservices vs Monolith" },
    { to: "/message-queues", label: "Message Queues" },
    { to: "/rate-limiting", label: "Rate Limiting" },
];

export function Sidebar() {
    return (
        <nav className="sidebar" aria-label="System design topics">
            <div className="sidebar-logo">The System Design Manual</div>
            <div className="sidebar-tagline">A practical guide to building scalable systems</div>
            <div className="sidebar-title">Chapters</div>
            <ul>
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}