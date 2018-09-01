Tránsito por una ciudad fluida
## Reto
¿Cómo podemos brindarle a las personas en situación de discapacidad, información actualizada de las vías menos congestionadas? 

## Situación
La situación de la localidad se hace evidente en que después de una jornada laboral extenuante la mayoría de habitantes deben soportar los embotellamientos que se originan por toda la calle 80 hacia el occidente, avenida que es la principal entrada a la localidad. El caos vehicular desmotiva a la población y la sumerge en una mala calidad de vida.
## Oportunidad/Problemática
La problemática de la comunidad se origina en que la localidad de Engativá tiene conexión con el resto de Bogotá y los municipios aledaños mediante dos vía principales de oriente a occidente (avenida calle 80 y avenida calle 63), y tres de norte a sur (carrera 68, avenida Boyacá, y avenida carrera 86). Estas vías conectan a la ciudad con los municipios aledaños y suelen congestionarse con frecuencia, disminuyendo el tiempo productivo y aumentando los tiempos muertos de los transeúntes.
## ¡Escenario ideal!
Un sistema integral de transporte que mejore la calidad de vida de los ciudadanos en situación de discapacidades. Además, que ese sistema pueda ayudar al resto de ciudadanos de la localidad y otras localidades.

## Solución digital planteada 
Generar una app que permita a las personas con discapacidad (en silla de ruedas), crear una comunidad que les permita compartir su movilización a través de la localidad en donde se busca que cada uno de las personas registradas puedan dar a conocer su experiencia calificándola en tres opciones:

**Accesibilidad baja:** Esta se da porque la via no se presta para que personas que se movilizan en silla de ruedas o con algún tipo de ayuda se puedan movilizar por este lugar. el icono que se presentará en el mapa se muestra a continuación.

<svg xmlns="http://www.w3.org/2000/svg" fill="red" width="100" height="100" viewBox="0 0 24 24"><path d="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8zm4-10.585l-2.586 2.585 2.586 2.585-1.414 1.415-2.586-2.586-2.586 2.586-1.414-1.415 2.586-2.585-2.586-2.585 1.414-1.415 2.586 2.585 2.586-2.585 1.414 1.415z"/></svg>

**Accesibilidad media:** Esta se da porque la vía aunque se presta para que personas que se movilizan en silla de ruedas o con algún tipo de ayuda se puedan movilizar, los que transitaron por este lugar presentaron algunas molestias por el lugar o tipo de terreno. el icono que se presentará en el mapa se muestra a continuación.

<svg xmlns="http://www.w3.org/2000/svg" fill="orange" width="100" height="100" viewBox="0 0 24 24"><path d="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8zm-2.039-4.994c.564-1.792.93-2.343 1.118-2.887.273-.788-.212-1.138-1.739.209l-.34-.64c1.743-1.901 5.334-2.331 4.113.614-.764 1.839-.606 1.484-.918 2.442-.455 1.396.693.83 1.818-.211.154.251.203.332.357.62-2.499 2.382-5.271 2.592-4.409-.147zm4.039-5.986c-.531.454-1.32.444-1.761-.022s-.367-1.21.164-1.664c.532-.454 1.319-.443 1.761.022.44.465.367 1.21-.164 1.664z"/></svg>

**Accesibilidad alta:** Esta se da porque la vía  se presta para que personas que se movilizan en silla de ruedas o con algún tipo de ayuda se puedan movilizar por este lugar de forma fácil.

<svg xmlns="http://www.w3.org/2000/svg" width="100" fill="green" height="100" viewBox="0 0 24 24"><path d="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8zm0-13l1.528 3.153 3.472.479-2.527 2.429.617 3.45-3.09-1.654-3.09 1.653.617-3.45-2.527-2.428 3.472-.479 1.528-3.153z"/></svg>

---

# Funcionamiento del app

## Pantalla de inicio

![enter image description here](/prototype/splash.png)

## Pantallla de login
![enter image description here](/prototype/login.png)

## Pantalla de bienvenida

![enter image description here](/prototype/bienvenida.png)

## Pantalla principal
![enter image description here](/prototype/Explorar%20Rese%C3%B1as.png)

## Otras Pantallas 

Para ver el prototipo en mas detalle abra el siguiente enlace:
[Prototype app movile](https://xd.adobe.com/spec/69baade9-757d-4175-6edf-1a4efcd0e833-1f8b/screen/e69289a3-eefd-4bbd-9a7b-c2073af670dd)

## Instalación

Para poder descargar y ver el código de la aplicación en modo desarrollo se tiene que crear una carpeta config en la ruta src y esta tiene se tiene que direccionar de la siguiente manera. >>**src/config/config.ts** 

el código tiene que lucir igual al siguiente pero configurando según las credenciales de su cuenta de google developer:

    
export const config = {  
  apiKey: "{{key generada por la consola de google}}",  
  authDomain: "{{url autenticación}}",  
  databaseURL: "{{database}}",  
  projectId: "{{projectid}}",  
  storageBucket: "{{storage}}",  
  messagingSenderId: "{{message sender}}"  
};    
export const apiKeyGoogle = '{{googleKey}}';



para encontrar mas información de como configurar estas variables de autenticación ir a :[Configuración Firebase](https://developers-latam.googleblog.com/2016/11/como-usar-firebase-en-una-extension-de.html) y [Google key](https://www.youtube.com/watch?v=zH5QCoU_8do)
