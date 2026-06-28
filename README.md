# 🚀 System Design Blog & CI/CD Sandbox

This project serves a dual purpose: primarily, it was built as a **sandbox for exploring and implementing CI/CD workflows** using GitHub Actions. Secondarily, it functions as a **mini tech-blog** documenting fundamental System Design concepts I've learned.

## ⚙️ The CI/CD Pipeline (GitHub Actions)

The core focus of this repository is the automated CI/CD pipeline. It is configured to ensure code quality and build integrity on every push and pull request.

The workflow is defined in [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) and performs the following automated steps:
1. **Trigger**: Runs on `push` and `pull_request` events targeting the `main` branch.
2. **Environment**: Provisions an `ubuntu-latest` runner.
3. **Setup**: Checks out the code and sets up **Node.js v20** with dependency caching.
4. **Install**: Installs exact dependencies using `npm ci` for reliable, reproducible builds.
5. **Type-Check**: Runs a strict TypeScript check (`npx tsc --noEmit`) to catch type errors before they hit production.
6. **Build**: Executes `npm run build` to verify the Vite production bundle compiles successfully.

This ensures that no broken code, failing builds, or TypeScript errors can be merged into the main branch.

##  The Tech Blog (Application Code)

To give the CI/CD pipeline a real-world application to build, I created a responsive, editorial-style tech blog covering backend engineering and system design topics. 

### Featured Topics
-  **Load Balancing** (Layer 4 vs Layer 7, Round Robin)
-  **Caching** (Redis, Cache aside, Write-through)
-  **CAP Theorem** (Consistency, Availability, Partition Tolerance)
-  **Database Sharding** (Horizontal partitioning, Shard keys)
-  **Microservices vs Monolithic Architecture**
-  **Message Queues** (Asynchronous decoupling, Pub/Sub)
-  **Rate Limiting** (Token Bucket, Leaky Bucket algorithms)

### Tech Stack
- **Frontend**: React + TypeScript
- **Bundler**: Vite
- **Routing**: React Router DOM
- **Styling**: Custom CSS (Vanilla) featuring a sleek, high-contrast editorial aesthetic with custom SVG isometric illustrations.

## 📂 Project Structure
```text
├── .github/
│   └── workflows/
│       └── ci.yml             # The CI/CD GitHub Actions pipeline
├── public/
│   └── images/                # Custom SVG and PNG diagrams
├── src/
│   ├── components/
│   │   └── Sidebar.tsx        # Chapter navigation sidebar
│   ├── pages/                 # Individual system design articles
│   ├── App.tsx                # Main router setup
│   ├── index.css              # Global tokens and typography
│   └── App.css                # Layout and editorial styling
└── package.json
```

## Glimpse of it

<img width="1877" height="1036" alt="Screenshot 2026-06-28 180830" src="https://github.com/user-attachments/assets/208003f4-0b04-498e-9beb-5229a57986c6" />
<img width="1877" height="1036" alt="Screenshot 2026-06-28 180830" src="https://github.com/user-attachments/assets/d77bea8b-7762-451e-ae55-47530baed322" />


## 🛠️ Local Development

If you'd like to run the tech blog locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/preethz2567/preethi-tech-blog.git
   ```
2. Navigate into the directory:
   ```bash
   cd preethi-tech-blog
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

   Thankyou for visiting this repository!!
