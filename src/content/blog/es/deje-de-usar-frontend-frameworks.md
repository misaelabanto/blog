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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b9eb5589-c2ac-4c5c-8357-49b23d1b7529/04eb041f-b9a8-4557-a22247bfdf36/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6DZL6M%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T040649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHeNbF8wftz%2FLa5WSuzcvx4N6vMTQMrLK84ruEmKNo72AiAi05VUpORC%2BvLeQglxFoh4foxcwnplIJpqQCH0mEtusiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTaHLSnkAKgeUpquKtwDNDVBc4BDsgiLzL%2FWOCsF66gdLQRUbUbwtsHMuuzlnN3B4ZVtgZMOX%2FbLNQRiBQrpFLtw9zgs6lSzvUYByd8rYGOLgt2dfWOx0LMB9PY3YfVeBL39UuAKuiJBWVm3Y8%2Fbwl2Ob%2FDRBJjmYa2biz%2BmLZtldxFNd9NA3iDzaOCjMEbRdeDfq396KcyGCrsxfQlA%2Bzs6f3ME9uZ%2Fhx4nlr%2FFdRTumRmeeAadZd1qCeode%2BoOHemKFa3OryqJuvFNm92c8fpUWn6JuTcFYbxEzq6pbdwyzi5pz7LJvcI2Kspp2V2N3ehsHQOqzErh2FgIgFNsa3eiWdB5O8a0sVnVNsFs%2BV6Iu9frkzgODnEGp2sJaLMRvWRB9bzHnDRg7rCa5wMAar6C7Su%2Bo102twQO6UwVUVYEbtq3zyvtHQrMdNHkiN1uWkMwTZ7rwknUkl6BluPWeVBd4023V2crYbIj6fyRVj9%2FVSdZnzSKALuqbL06NVklowaRlLKMq3sTlmUKQ58RTdZo73SN98yjVhFZWC6T7cTqAPdCpbZDz7p93xqw9S6W4TNgpKhcG47PwtgijM6HUrqbwxt9x6CxZOMTR6EvCoM78X0OoYc9wsOCx2dnB6y3XGyIgf%2FX9HF%2B1y4wionyxgY6pgFmz5KrkeiyY1nDcaldktI9kIPKyxa5%2FBILHEHGYGUtD5P2hRx3u1qV0SdAmTxl6df2kn9YPySYAw%2F2Mov%2BwZ7D9CocI2FixCDPL%2FRJiSax%2F%2FWPejUNnfEPdXQRixMXTRCYTQG2juxojFnlRJk%2FYUGprg%2FikA87FrpB0Eu4PhY1IIVI4RSqjVfC1d5ShGHOTzVQlYM8VfBccsQ7kfGNqTEY3Bdu8HEJ&X-Amz-Signature=2e7c1704572d702e63b8e7463ca24ae8347cd130d53c15f4e3094b8aabcefa61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

En internet también hay otros ejemplos horrorosos, como este: 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b9eb5589-c2ac-4c5c-8357-49b23d1b7529/ebb24493-fdad-41c1-a285-e2141b9987ec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6DZL6M%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T040649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHeNbF8wftz%2FLa5WSuzcvx4N6vMTQMrLK84ruEmKNo72AiAi05VUpORC%2BvLeQglxFoh4foxcwnplIJpqQCH0mEtusiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTaHLSnkAKgeUpquKtwDNDVBc4BDsgiLzL%2FWOCsF66gdLQRUbUbwtsHMuuzlnN3B4ZVtgZMOX%2FbLNQRiBQrpFLtw9zgs6lSzvUYByd8rYGOLgt2dfWOx0LMB9PY3YfVeBL39UuAKuiJBWVm3Y8%2Fbwl2Ob%2FDRBJjmYa2biz%2BmLZtldxFNd9NA3iDzaOCjMEbRdeDfq396KcyGCrsxfQlA%2Bzs6f3ME9uZ%2Fhx4nlr%2FFdRTumRmeeAadZd1qCeode%2BoOHemKFa3OryqJuvFNm92c8fpUWn6JuTcFYbxEzq6pbdwyzi5pz7LJvcI2Kspp2V2N3ehsHQOqzErh2FgIgFNsa3eiWdB5O8a0sVnVNsFs%2BV6Iu9frkzgODnEGp2sJaLMRvWRB9bzHnDRg7rCa5wMAar6C7Su%2Bo102twQO6UwVUVYEbtq3zyvtHQrMdNHkiN1uWkMwTZ7rwknUkl6BluPWeVBd4023V2crYbIj6fyRVj9%2FVSdZnzSKALuqbL06NVklowaRlLKMq3sTlmUKQ58RTdZo73SN98yjVhFZWC6T7cTqAPdCpbZDz7p93xqw9S6W4TNgpKhcG47PwtgijM6HUrqbwxt9x6CxZOMTR6EvCoM78X0OoYc9wsOCx2dnB6y3XGyIgf%2FX9HF%2B1y4wionyxgY6pgFmz5KrkeiyY1nDcaldktI9kIPKyxa5%2FBILHEHGYGUtD5P2hRx3u1qV0SdAmTxl6df2kn9YPySYAw%2F2Mov%2BwZ7D9CocI2FixCDPL%2FRJiSax%2F%2FWPejUNnfEPdXQRixMXTRCYTQG2juxojFnlRJk%2FYUGprg%2FikA87FrpB0Eu4PhY1IIVI4RSqjVfC1d5ShGHOTzVQlYM8VfBccsQ7kfGNqTEY3Bdu8HEJ&X-Amz-Signature=5772f76ed432f08a8e06173f527f844980d98a494dfdb249647ee2ba9292b0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Yo me pregunto si es necesario tener toda esta maraña de estados. ¿Por qué tenemos que vivir así? Siento que desde que uso HTMX mis web apps se han simplificado significativamente y se ha mejorado. Sí, ya sé. Se puede desarrollar un proyecto con código mucho más limpio y ordenado que esto, pero lamentablemente eso no es lo más común.

De cualquier forma, sí disfruto escribir código en Flutter, para el cual no puedo renderizar directamente desde el servidor, ¿verdad? Me gusta el lenguaje (Dart), creo que es un lenguaje moderno y fácil de usar. Sin embargo, me ha gustado mucho GetX para manejar los estados pues la abstracción es super intuitiva. Es de los mejores frameworks que he visto.