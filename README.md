# PDF Viewer POC

Proof-of-concept that embeds a PDF viewer in a **React + Vite** stack.  
It validates the capabilities of **`@react-pdf-viewer` v3.12** (core, page-navigation, zoom) for general as well as Japanese documents that require CMap files.

---

## ✨ Features (Draft 1)

| Category | Draft-1 Implementation |
| -------- | --------------------- |
| Viewer   | `@react-pdf-viewer/core` with CJK character-maps (`/cmaps/`) |
| Navigation | ▸ **Prev / Next** buttons<br>▸ **Direct page** input |
| Zoom      | ▸ **Zoom-Out / Zoom-In** |
| UI        | ▸ Sticky, glass-blur toolbar<br>▸ Responsive, full-height layout |
| Resilience | ▸ Fallback: Centred “Oops! Invalid PDF file.” message |

---

## 📦 Tech Stack
**React 19 (react@19.1.0) | TypeScript 5 (typescript@5.8.3)** | **Vite 4 (vite@4.4.0)** | **react-pdf-viewer 3.12** plugins  
  `core`, `page-navigation`, `zoom` | **pdf.js 3.0.279** worker (hosted CDN)

---

## 🚀 Getting Started

```bash
git clone https://github.com/Priyesh-Eltropy/pdfviewer-poc.git
cd pdfviewer-poc

npm ci

npm run dev
