# Holter App RN

Aplicación móvil para monitoreo de ECG desarrollada con React Native y TypeScript.

## 📱 Características

- Autenticación de usuarios
- Visualización de datos ECG
- Interfaz adaptativa (modo claro/oscuro)
- Soporte multiidioma
- Navegación mediante drawer
- Componentes reutilizables animados

# 🏗️ Estructura del Proyecto 

## 🛠️ Tecnologías Principales

- React Native
- TypeScript
- Redux Toolkit
- React Navigation
- i18next (internacionalización)
- Expo Vector Icons

## 🎨 Componentes Principales

### AccordionItem
Componente expandible animado con las siguientes características:
- Animación suave usando Animated API
- Soporte para modo oscuro/claro
- Personalizable mediante props
- Indicador visual de estado

### DrawerNavigator
Navegación principal con:
- Menú lateral personalizado
- Gestión de autenticación
- Perfil de usuario
- Configuraciones

### AuthPage
Página de autenticación con:
- Login/Registro
- Validación de formularios
- Gestión de errores
- Recuperación de contraseña

## 🔐 Gestión de Estado

### Redux Store
- Autenticación de usuario
- Preferencias de idioma
- Tema de la aplicación
- Datos del ECG

### Slices
- `authSlice`: Gestión de autenticación
- `themeSlice`: Gestión del tema
- `languageSlice`: Gestión del idioma

## 🌐 Servicios

### Autenticación
- Login/Logout
- Registro
- Recuperación de contraseña
- Persistencia de sesión

### ECG
- Obtención de datos
- Procesamiento de señales
- Almacenamiento local

## 🎯 Tipos Principales

```typescript
// Navegación
export type RootDrawerParamList = {
  homepage: undefined;
  profile: undefined;
  settings: undefined;
  Help: undefined;
};

// Usuario
export type User = {
  name: string;
  email: string;
  isAuthenticated: boolean;
  token: string;
};

// Datos ECG
export type ECGData = {
  frequencyRanges: Array<{
    range: string;
    percentage: number;
  }>;
  maxMin: {
    max: number;
    min: number;
    timestamp: string;
  };
};
```

## 🚀 Inicio Rápido

1. Instalar dependencias:
```bash
npm install
# o
yarn install
```

2. Iniciar el proyecto:
```bash
npm start
# o
yarn start
```

3. Credenciales de prueba:

Email: test@example.com
Password: 123456

## 📝 Convenciones de Código

- Nombres de componentes en PascalCase
- Nombres de archivos en PascalCase para componentes
- Nombres de archivos en camelCase para utilidades
- Tipos prefijados con 'T' o interfaces con 'I'
- Estilos usando StyleSheet.create()

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 