# React + Chakra UI Portfolio Starter

This is a **from-scratch portfolio starter** using **React + Vite + Chakra UI**.

## Quick answer to your question

- **Use Node `.msi` on Windows (recommended)**: easiest installer, auto-adds Node/npm to PATH.
- Use `.zip` only if you need a portable/manual install (more setup work).

For most people: **download the LTS `.msi` from https://nodejs.org and install it**.

---

## 1) Install fundamentals first

### Windows (recommended)
1. Go to https://nodejs.org
2. Download **LTS** version (`.msi`).
3. Run installer:
   - Keep default options.
   - Keep **"Add to PATH"** enabled.
4. Open a **new** terminal and verify:

```bash
node -v
npm -v
```

### If you picked `.zip` (manual)
1. Extract the zip somewhere (for example `C:\tools\node`).
2. Add that folder to your **System PATH** manually.
3. Re-open terminal and run:

```bash
node -v
npm -v
```

---

## 2) Create or use this project

If you already cloned this repo, go to step 3.

If starting from an empty folder:

```bash
git clone <your-repo-url>
cd my-portfolio
```

---

## 3) Install project dependencies

From the project root:

```bash
npm install
```

---

## 4) How to install Chakra UI in React

In this starter, Chakra is already configured in `package.json` and app files.

If you ever need to add it manually in another React app:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install @chakra-ui/icons
```

Then wrap your app with `ChakraProvider` in `src/main.jsx`.

---

## 5) Run locally

```bash
npm run dev
```

Open the shown URL (usually `http://localhost:5173`).

---

## 6) Build for production

```bash
npm run build
npm run preview
```

---

## Project structure

```text
.
├── index.html
├── package.json
├── src
│   ├── App.jsx
│   ├── main.jsx
│   └── theme.js
└── vite.config.js
```

## Customize your content

Edit `src/App.jsx`:
- `Your Name`
- Hero text
- Skills
- Projects
- Footer links

## Tech stack

- React 18
- Vite 6
- Chakra UI 2
- Emotion
- Framer Motion
