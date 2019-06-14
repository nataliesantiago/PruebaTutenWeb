# PruebaTutenWeb

Para el desarrollo de la prueba se utilizaron los siguientes componentes

## "@ng-select/ng-select": "^2.20.0"
  Este componente se utilizo para customizar los select de la aplicación

## "@swimlane/ngx-datatable": "^15.0.2"
  Este componente se utilizo para crear el datagrid con los datos obtenidos del usuario

## "moment": "^2.24.0"
  Esta libreria se utilizo para dar formato a las fechas
  
# Instalación 

## git clone https://github.com/nataliesantiago/PruebaTutenWeb.git
## cd PruebaTutenWeb

Una vez en la carpeta ejecutar los siguientes comandos

## npm install -g @angular/cli

## npm install

## ng serve

# Suposiciones:
  1. Para consumir el servicio correspondiente https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true, se dejo como constante el email que se ingresa al momento de realizar el inicio de sesión.  
  
  2. En la visualizacion de los datos solo se tuvieron en cuenta los libros principales y no los parentBooking de cada libro. 
