# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this templanpm create vite@latest my_first_project_react -- --template react te because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



In react realizziamo SPA (Single Page Application), singolo HTML. 

JSX Java Script Extention rende react dichiarativo, scriviamo js ma return html. 

React Fragment <> </>

All'interno delle graffe per richiamare una variabile/costante non posso inserire istruzioni, no funzioni. Posso inserire ad esempio un ternario.

Per jsx no closing tag, tutti i tag devono essere chiusi. <  chiusura   />

Attributo class e for vanno modificate: per class ClassName e per for htmlFor.