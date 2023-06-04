Correo: fundacionkeriva@gmail.com
contraseña:  4491888898
Github:FundacionKeriva
contraseña:4491888898k

//administracion credencial
codigo de acceso: keriva
contraseña: 1234678

*Servicios usados en firebase*
## realtime database
{
  "rules": {
    ".read": "now < 1735666800000",  // 2024-5-22
    ".write": "now < 1735666800000",  // 2024-5-22
  }
}

## storage
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if
          request.time < timestamp.date(2024, 5, 23);
    }
  }
}