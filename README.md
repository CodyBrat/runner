# India Running League (IRL) Dashboard

A fast, highly legible, and premium web application dashboard tailored specifically for runners participating in the India Running League. Built with React and Vite for a lightweight, component-driven frontend architecture.

## Development Approach & Design Strategy

For the IRL dashboard assignment, the primary objective was to build a modern, high-performance web application that feels authentic to the sports and fitness industry. The structural and aesthetic decisions detailed below strip away generic layouts in favor of an interface designed by humans, for athletes.

### Architecture & Layout Philosophy
The interface is structured using a static Bento Grid layout locked to a single `100vh` viewport. Since this is a sports dashboard where users want to quickly check their statistics and get moving, avoiding scroll-fatigue is crucial. By restricting the layout, the Runner Profile, Distance Goals, Leaderboard, and Weekly Activity components are all visible at a single glance, minimizing user friction.

### Premium Athletic Aesthetics
To create an interface that feels authentic to the sports and fitness industry, inspiration was drawn from high-end athletic applications:
*   **Dynamic Typography:** Standard system fonts lack the necessary energy for a sports application. `Barlow Condensed` from Google Fonts was introduced for all major data points. By scaling up the data points and italicizing them, the UI naturally implies speed and forward momentum.
*   **Refined Glassmorphism:** A custom frosted glass effect was implemented using CSS `backdrop-filter` combined with subtle gradient borders to mimic physical frosted acrylic. To give the interface depth, this glass sits on top of a dark background featuring a subtle diagonal track pattern that implies the texture of a synthetic running track.
*   **Focal Contrast:** The Global Leaderboard was intentionally designed as a high-contrast Vibrant Card utilizing a rich orange gradient. This purposeful break in the glass design system instinctively draws the user's eye to their competitive standing, which is often a runner's core motivator.

### Data Visualization Strategy
Instead of relying on a single static metric for the 100km goal, a layered data visualization experience was built inside the Progress component to keep the data engaging. It utilizes three simultaneous visual anchors:
1.  A **Circular Gauge** providing an immediate visual read on the raw completion percentage.
2.  A traditional **Linear Bar** directly beneath the prominent distance numbers.
3.  A gamified **Milestone Track** containing checkpoints (at 20km, 40km, etc.) that acts as a visual timeline, lighting up as the runner passes them to create a continuous sense of achievement.

### Theming & Polish
To ensure maintainability, all colors and layout variables are centralized in a global CSS file. This architecture allowed for the seamless implementation of a fully functional Light/Dark Mode toggle. Global CSS transitions are applied throughout the application, ensuring that every interaction, from hover states on buttons to the complete theme switch, animates smoothly.

## Setup Instructions

### Prerequisites
- Node.js environment with npm

### Installation and Usage
1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Access the application in your browser (typically at http://localhost:5173).
