# What The Hex

>A tiny React app for exploring named colors and their hex values — pick a color, preview it, and search by name.

## 🚀 About

What The Hex is a small, fast color explorer built with Vite + React. It provides a visual preview area and a searchable list of curated color swatches (name and hex code). It's ideal as a quick reference tool for designers and developers who want to browse named colors and copy hex values for prototypes.

## ✨ Features

- Live preview panel that shows the selected color and its hex code.
- Select colors from a dropdown populated from a curated `Colors` dataset.
- Search colors by name — results render as colored rows showing name and hex.
- Lightweight and fast thanks to Vite + React.

Note: the underlying `Colors` dataset includes HSL and complementary hex values for each color — useful if you want to extend the app with contrast checks or complementary suggestions.

## 🧰 Built With

- React
- Vite
- Vanilla CSS for component styles

## 📁 Project Structure (high level)

- `src/Colors.js` — curated array of color objects (id, name, hex `code`, HSL, complementary values).
- `src/Components/ColorWindow.jsx` — main UI: preview, dropdown, search form, and results list.
- `src/Components/ColorWindow.css` — styles for the color window and search/results.
- `src/App.jsx`, `src/main.jsx` — app bootstrapping and layout.

## 🛠️ Local Setup

Prerequisites: Node.js (16+) and npm or yarn.

Install dependencies:

```bash
npm install
# or
yarn
```

Run the dev server:

```bash
npm run dev
# or
yarn dev
```

Open the app at the URL printed by Vite (usually http://localhost:5173).

## 💡 How to Use

1. Choose a color from the dropdown — the preview panel updates to that hex.
2. To search, type part of a color name in the search box and press Search — matching swatches display below with their name and hex code.

The UI is intentionally minimal: pick, preview, copy.

## 🧩 Notes & Next Steps

- Small bug: some event handlers reference `event` without receiving it as an argument (rely on the global event object). Consider updating handlers to accept `(e)` and use `e` explicitly.
- Possible enhancements:
	- Click-to-copy hex codes in the preview/results.
	- Contrast ratio / accessibility badges.
	- Add favorites or a palette builder.

## Contributing

Contributions are welcome. If you open a PR, please keep changes focused and include a short description of the change. For big changes, open an issue first to discuss the approach.

## License

This project is private in `package.json`. Add a license file if you intend to open-source it.

---

Made with ❤️ — enjoy exploring colors!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
