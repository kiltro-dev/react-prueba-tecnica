# React Prueba Tecnica - Curso React de Midudev

1.  Inicialización de proyecto Vanilla JS con Vite

    ```console
    npm create vite@latest
    ```

2.  Instalar plugin de React

    ```console
    npm install @vitejs/plugin-react -E
    ```

3.  Installar React y React Dom

    ```console
    npm install react react-dom -E
    ```

4.  Crear en la en la raiz el archivo de configuración de Vite **vite.config.js**

    ```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
    });
    ```

5.  Configurar entry point en **main.js** y cambiar nombre a **main.jsx**

    ```javascript
    import { createRoot } from 'react-dom/client';

    const root = createRoot(document.getElementById('app'));

    root.render(<h1>Hello</h1>);
    ```

6.  Instalar linter

    ```console
    npm i standard -D
    ```

7.  Configurar linter en **package.json**
    ```json
    {
    ...,
    "extends": "./node_modules/standard/eslintrc.json"
    }
    ```
8.  Crear campeta **src** y dentro el archivo **App.jsx**

9.  Crear y exportar componente en **App.jsx**

    ```javascript
    export function App() {
      return <h1>App de gatitos</h1>;
    }
    ```

10. importar **App.jsx** en **main.jsx**

    ```javascript
    ...
    import { App } from './src/App';
    ...
    ```

11. Importar y probar **useState** en **App.jsx**

    ```javascript
    import { useState } from 'react';

    export function App() {
      const [fact, setFact] = useState('lorem ipsum cat');
      return (
        <main>
          <h1>App de gatitos</h1>
          <p>{fact}</p>
        </main>
      );
    }
    ```
