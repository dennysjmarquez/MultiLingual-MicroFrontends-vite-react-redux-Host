# MultiLingual MicroFrontends con Vite, React y Redux

**Compartiendo Estados y Eventos entre Módulos MFE**

![img.png](img.png)

Este proyecto sencillo que demuestra la integración de microfrontends utilizando Vite Module Federation con React. Permite cambiar el idioma de forma global, emitiendo un evento desde el host que es escuchado por los demás microfrontends para mantener el idioma sincronizado.

Cada proyecto tiene independencia completa, con su propio sistema de estado con Redux y lógica aislada.

El proyecto Host proporciona la interfaz principal, con la capacidad de cargar bajo demanda cada microfrontend dentro de la UI y pasarles props.

Se implementó internacionalización utilizando i18next, con carga dinámica de traducciones. Los idiomas son agregados dinámicamente por los componentes, Los componentes se estructuran en módulos independientes y cargan dinámica de traducciones como los estilos.

Todo esto contribuye a la escalabilidad y mantenibilidad del proyecto.

Para los estilos se aplicó Styled Components con la metodología BEM para mantener consistencia.

### **¿Que es Module Federation?**

Module Federation es una característica de webpack 5 que permite a múltiples aplicaciones JavaScript independientes trabajar juntas. La idea es que diferentes equipos puedan trabajar en sus propias aplicaciones, pero estas aplicaciones pueden compartir componentes. Esto puede ser útil para microfrontends, donde diferentes equipos pueden trabajar en diferentes partes de una aplicación más grande.

### **¿Que es Vite Plugin Federation?**

Vite Plugin Federation es un plugin que añade soporte para Module Federation a Vite. Esto significa que puedes usar Vite para construir tus aplicaciones y aún así beneficiarte de las características de Module Federation.

Pueden obtener más información sobre Vite Plugin Federation en su [repositorio de GitHub](https://originjs.org/en/guide/plugins/vite-plugin-federation/)
y en su [documentación oficial](https://github.com/originjs/vite-plugin-federation)

¡Espero que esto les ayude!

---

### **La estructura del proyecto es la siguiente:**

```
📁 components
└── 📁 Component
    ├── 📁 lang
    │       🌐 en.json
    │       🌐 es.json
    │       📄 index.js
    │
    ├── 📁 styles
    │       🎨 componentStyles.js
    │
    └──   📄 index.js
          📄 Component.jsx
```

### **Tecnologías utilizadas**

Este proyecto fue desarrollado utilizando las siguientes tecnologías y herramientas: Redux, i18next, react-i18next, Redux, React-Redux, Styled Components, Vite.

### **Requisitos del sistema**

Este proyecto fue desarrollado con las siguientes versiones de Node.js y npm:

- Node.js: v18.17.1
- npm: 10.2.4

Por favor, asegúrate de tener instaladas estas versiones (o versiones más recientes) antes de intentar instalar y ejecutar este proyecto.

### **Proyectos Relacionados**

Este proyecto host se integra con dos proyectos remotos que contienen los componentes de las series. Estos son:

- **Proyecto Remoto 1:** Este proyecto contiene los componentes de una de las series que se muestran en la aplicación host.
- **Proyecto Remoto 2:** Este proyecto contiene los componentes de la otra serie que se muestra en la aplicación host.

Ambos proyectos remotos son fundamentales para la funcionalidad de la aplicación host, ya que proporcionan los datos y la interfaz de usuario para las series que se muestran.

### **Instalación**

Para ejecutar el proyecto principal o host y los proyectos remotos en tu entorno local, necesitarás seguir estos pasos:

1. **Clonar los repositorios:** Primero, necesitarás clonar los repositorios de los proyectos en tu máquina local.
2. **Instalar las dependencias:** En cada proyecto, posiciónese en la raíz del directorio y ejecute el comando `yarn` para instalar las dependencias.


## **Cómo usar la aplicación**

1. **Inicia los proyectos remotos:** Asegúrate de que los proyectos remotos estén en ejecución. Puedes hacer esto ejecutando el comando `yarn build && yarn preview` o `yarn start` en el directorio de cada proyecto remoto. 
Deberían estar accesibles en `http://localhost:5174` y `http://localhost:5175`.
2. **Inicia el proyecto host:** Antes de iniciar el proyecto host, es una buena práctica verificar que los proyectos remotos estén en ejecución y sean accesibles. Puedes hacer esto simplemente navegando a `http://localhost:5174` y `http://localhost:5175` en tu navegador web. Si puedes ver el contenido esperado en estas páginas, entonces los proyectos remotos están en ejecución y listos para ser utilizados por el proyecto host.
Ahora puedes iniciar el proyecto host ejecutando el comando `yarn run dev` en su directorio. Esto iniciará el proyecto en `http://localhost:5173`
Si sigues estos pasos, deberías poder ver y interactuar con tu aplicación completa en tu navegador web.

Recuerden que el proyecto host se integra con los proyectos remotos, por lo que necesitarás tener los proyectos remotos en ejecución para que el proyecto host funcione correctamente.

¡Espero que esto les ayude a utilizar la aplicación!

-- END --


