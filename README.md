# Xai — Insight Studio

A high-fidelity intelligence platform prototype built with **Next.js 15**, **Three.js**, and **GSAP**. This project demonstrates the transformation of raw data into structured intelligence through immersive motion design and performance-optimized 3D interactions.

**[Live Demo on Vercel](https://xai-insight-studio.vercel.app/)**

---

## 🚀 Technical Highlights

### 1. Performance-Optimized 3D Morphing
The **Hero Section** features a custom Three.js `Points` system visualizing data entropy becoming order.
* **The Logic:** Implemented a spherical-to-grid lerp (Linear Interpolation) driven by **GSAP ScrollTrigger**.
* **Optimization:** Used `AdditiveBlending` and `depthWrite={false}` to maintain 60fps while achieving a "glowing" data aesthetic.

### 2. Immersive Narrative Scrolling
The **InsightFlow** section utilizes a "Sticky Pinning" strategy.
* Instead of standard vertical scrolling, the UI pins the section, allowing the user to "walk through" the Ingest, Analyze, and Generate stages via opacity and Y-axis translations.
* This ensures the narrative of the product is front-and-center, mimicking the design language of high-end SaaS products like **Stripe** or **Linear**.

### 3. Engineering Discipline: Instanced Rendering
In the **Signature Interaction**, I replaced standard React-Three-Fiber meshes with an `instancedMesh` system.
* **The Result:** Rendered 400+ complex dodecahedron geometries in a **single draw call**.
* **Reactive UI:** Integrated mouse-position tracking with `THREE.MathUtils.lerp` to create a "magnetic" feel, making the data cluster react naturally to user input.

### 4. Stateful Product Dashboard
The **Dashboard** demonstrates "Product Thinking" by moving beyond static mockups.
* **State Management:** Utilized React `useState` and `AnimatePresence` to handle seamless transitions between Overview, Analytics, and Automations.
* **Visual Polish:** Implemented a global `.glass-panel` utility for consistent depth, blur, and lighting across the application.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **3D Engine:** Three.js / React Three Fiber / @react-three/drei
* **Animation:** GSAP (ScrollTrigger) & Framer Motion
* **Styling:** Tailwind CSS (Modern `@import "tailwindcss"` syntax)
* **Deployment:** Vercel

---

## 📦 Local Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Sifat-Ikram/xai-insight-studio.git](https://github.com/Sifat-Ikram/xai-insight-studio.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```
---

## 🎨 Design Philosophy
The UI follows a "Dark Intelligence" aesthetic:
- **Typography:** Geist Sans for clarity, Geist Mono for technical data points.
- **Color Palette:** Deep backgrounds (`#0b0d10`) contrasted with electric blue (`#4f7fff`) for call-to-actions.
- **Atmosphere:** Heavy use of backdrop blurs and subtle borders to create layers of depth.

---

Created for the **RacoAI Engineering Assessment**.
