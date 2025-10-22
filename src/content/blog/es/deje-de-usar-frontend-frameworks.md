---
title: "Dejé de usar frontend frameworks"
description: "En este artículo, el autor comparte su evolución desde el uso de Angular, Vue y React hasta prescindir completamente de los frameworks de frontend. Explica las razones detrás de esta decisión, detallando cómo la gestión de estados en las aplicaciones web tradicionales puede complicar el desarrollo. Propone una visión alternativa, donde el backend sirve directamente la capa de presentación, y destaca el uso de HTMX como una solución que simplifica la creación de aplicaciones web."
pubDate: 2025-09-03
heroImage: ''
category: Software
tags: ["web"]
---

Finalmente deje de usar frontend frameworks. Empecé en el mundo de desarrollo web usando Angular, luego me gustó más Vue, en Devsu usé React. Finalmente ahora no uso ninguno. ¿Por qué? En este artículo explicaré de manera detallada qué me llevó a tomar esta decisión.

## State management

Imagina que tienes una aplicación CRUD. El proceso para llevarla a cabo con los tutoriales de YouTube y para desarrolladores principiantes, como yo fui en un inicio, sería el siguiente:
- Definir modelo de base de datos
- Escoger un motor de base de datos
- Escoger un framework backend. Puede ser Express.js, Nest.js u Hono
- Implementar una REST API en este backend
- Escoger un framework frontend. Puede ser Angular, Vue o React.
- Implementar servicios que consuman la API REST
- Implementar la UI

¿Ya se puede observar cuál es el problema aquí?

```mermaid
graph LR
DATABASE --> BACKEND
BACKEND --> ENDPOINT1
BACKEND --> ENDPOINT2
ENDPOINT1 --> UI_SERVICE1
UI_SERVICE1 --> UI_STATE1
UI_SERVICE1 --> UI_STATE2
UI_SERVICE1 --> UI_STATE3
```

## Cómo debería verse una aplicación web

Todos sabemos que deberíamos separar la capa de presentación de la capa de negocio. Es algo que muchas veces olvidamos. En una aplicación web, el HTML es una capa de presentación más, hecha de texto.

```mermaid
graph LR
DATABASE --> BUSINESS
BUSINESS --> UI_PRESENTATION_LAYER
BUSINESS --> API_PRESENTATION_LAYER
```

Los servidores son buenos sirviendo y retornando texto, cualquier tipo de texto, no sólo JSON.😉

## HTMX

En mis últimos proyectos he utilizado HTMX de forma seguida. Esto ha permitido acelerar el desarrollo dado que ya no se programan dos proyectos de forma independiente, uno para frontend y otro para backend sino sólo backend y mostrando cómo debería actualizarse cada parte de la web. Esto también ha permitido que vea las cosas de forma diferente. A veces también es mucho más fácil crear un custom component de HTML en lugar de manejar los formularios de formas extrañas, como creando una larga lista de useState, como en el siguiente ejemplo:

```jsx
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // ...
}
```

En internet también hay otros ejemplos horrorosos, como este: [Un ejemplo de código horroroso estaba aquí]

Yo me pregunto si es necesario tener toda esta maraña de estados. ¿Por qué tenemos que vivir así? Siento que desde que uso HTMX mis web apps se han simplificado significativamente y se ha mejorado.

Sí, ya sé. Se puede desarrollar un proyecto con código mucho más limpio y ordenado que esto, pero lamentablemente eso no es lo más común.

De cualquier forma, sí disfruto escribir código en Flutter, para el cual no puedo renderizar directamente desde el servidor, ¿verdad? Me gusta el lenguaje (Dart), creo que es un lenguaje moderno y fácil de usar. Sin embargo, me ha gustado mucho GetX para manejar los estados pues la abstracción es super intuitiva. Es de los mejores frameworks que he visto.
