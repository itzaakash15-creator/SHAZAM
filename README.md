# Team Shazam — Adaptive Sonar Transmitter for AUVs
### Smart India Hackathon 2026 (SIH 2026) Official Showcase Website

An ultra-premium, defense-tech & marine-engineering inspired web platform showcasing an intelligent, low-power adaptive sonar transmission system that dynamically modifies acoustic chirps based on real-time environmental water column conditions.

---

## 🌊 Key Features & Capabilities

- **Interactive Sonar Radar**: Custom canvas-rendered circular radar component with 360° sweep beam, expanding acoustic wave rings, bearing ticks, and illuminated underwater target blips.
- **Dynamic Waveform Synthesizer**: Real-time Linear Frequency Modulated (LFM) chirp simulation allowing judges and evaluators to test 5 distinct ocean condition profiles (*Clear Water*, *High Turbidity*, *Long-Range*, *High-Detail*, *High Noise/Clutter*) with synthesized audio pings via Web Audio API.
- **Central STM32G474RE IC Architecture**: Interactive microcontroller hardware visualization exploring internal ADC, Timers, DMA, DAC, CORDIC/FPU, GPIO, and USART peripherals.
- **End-to-End 15-Stage System Pipeline**: Complete flowchart detailing diagnostics, sensor acquisition, math calculation, power amplification, transducer drive, and echo SNR verification.
- **Cognitive Sonar Feedback Loop**: Closed-loop decision tree (*Sense $\to$ Decide $\to$ Transmit $\to$ Verify $\to$ Adapt*).
- **100% Content Editability**: All team members, mentors, hardware models, video URLs, and SIH credentials are fully decoupled into TypeScript data modules (`src/data/*.ts`).
- **Desktop HUD & Special UX**: Slim top scroll progress bar, vertical HUD section navigator (01–21), and lightweight desktop sonar cursor reticle.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS + Glassmorphism
- **Icons**: Lucide React + Custom Marine SVG Icons
- **Audio & Visual**: HTML5 Canvas + Web Audio API

---

## 📁 Project Structure

```
SHAZAM/
├── public/
│   ├── sonar-icon.svg          # Custom Sonar Transducer SVG Favicon
│   └── og-preview.png          # Social preview banner
├── src/
│   ├── components/
│   │   ├── sections/           # 21 Individual Technical Showcase Sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CoreIdeaSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── SystemArchitectureSection.tsx
│   │   │   ├── ControllerSection.tsx
│   │   │   ├── AdaptiveLogicSection.tsx
│   │   │   ├── FrequencyConceptSection.tsx
│   │   │   ├── CognitiveSonarSection.tsx
│   │   │   ├── HardwareSection.tsx
│   │   │   ├── TechStackSection.tsx
│   │   │   ├── ComparisonSection.tsx
│   │   │   ├── InnovationsSection.tsx
│   │   │   ├── ApplicationsSection.tsx
│   │   │   ├── DemoSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── SihSection.tsx
│   │   │   ├── ResourcesSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/                 # Reusable UI & Visualizers
│   │       ├── SonarRadar.tsx
│   │       ├── WaveformVisualizer.tsx
│   │       ├── Navbar.tsx
│   │       ├── SectionNavigator.tsx
│   │       ├── ScrollProgress.tsx
│   │       ├── SonarCursor.tsx
│   │       └── Icons.tsx
│   ├── data/                   # EDITABLE CONFIGURATION (No UI code changes needed)
│   │   ├── project.ts          # SIH details, video links, resources & contact
│   │   ├── team.ts             # 6 Team members & 2 mentors
│   │   ├── hardware.ts         # Sensor models, specs & operating voltages
│   │   ├── sonarLogic.ts       # Acoustic profiles & chirp parameters
│   │   ├── timeline.ts         # 9 development & validation stages
│   │   ├── architecture.ts     # 15 system pipeline steps & STM32 peripherals
│   │   └── innovations.ts      # Core innovations & applications
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── vite.config.ts
```

---

## ⚙️ How to Edit Content (No Coding Required)

All content is cleanly organized in `src/data/`:

1. **Edit Team Members & Mentors**:
   Open [`src/data/team.ts`](./src/data/team.ts) to update team member names, photos, roles, specializations, contributions, and LinkedIn/GitHub URLs.

2. **Edit SIH 2026 Details & Links**:
   Open [`src/data/project.ts`](./src/data/project.ts) to edit:
   - Problem Statement ID
   - Ministry / Organization name
   - College / Institution and Department
   - Video demonstration URL (YouTube embed or MP4 link)
   - Downloadable document / presentation links

3. **Edit Hardware Components & Sensor Models**:
   Open [`src/data/hardware.ts`](./src/data/hardware.ts) to change component part numbers, pinouts, and specs.

4. **Edit Sonar Profiles & Frequencies**:
   Open [`src/data/sonarLogic.ts`](./src/data/sonarLogic.ts) to adjust carrier frequencies, bandwidths, and pulse durations.

---

## 🚀 Installation & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port shown in your terminal).

### 3. Build for Production
```bash
npm run build
```
This compiles the TypeScript code and produces an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

This project is a static React application with zero backend requirements and is 100% ready for Vercel:

### Method 1: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Method 2: Via GitHub / Vercel Dashboard
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Team Shazam SIH 2026 showcase website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New** > **Project** and import your repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 🛡️ License & Team Attribution
Designed & Engineered by **Team Shazam** for **Smart India Hackathon 2026**.
All rights reserved.
