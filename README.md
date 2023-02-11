# To-do list API

Projeto de lista de tarefas, usando chamadas HTTP, focando na apredizagem das seguintes competência: 

- API REST;

- Javascript & Node.JS;

- Persistência de dados (Banco de dados);

## 🛠 Tecnologias

- Node.Js
- Express
- MySQL

## Instalação

> Começaramos clonando o projeto e acessando a pasta do projeto:
```
$ git clone https://github.com/gabriellgjs/todo-api.git
$ cd todo-api/backend
```

>Instalando as dependências do projeto:
```
$ npm install
```

>Iniciar o MySql e importar o banco de dados 'todo-api.sql'. Além de criar e preencher o arquivo .env baseado no arquivo .env.example:
```
PORT= ??
MYSQL_HOST= ??
MYSQL_USER= ??
MYSQL_PASSOWORD= ??
MYSQL_DB= ??
```

---
## Rotas
| Url                              | Método  |  Uso                        |
| :--------------------------------|:--------| :---------------------------|
| /tasks                           | GET     | Busca todas as tasks        |
| /task                            | POST    | Cria uma task               |
| /task/?id                        | PUT     | Atualiza uma task           |
| /task/?id                        | DELETE  | Deleta uma task             |

## Dados para consumir rotas

##### *POST* Request: `/task`  

 - Os dados obrigatorios são: 
     * `title`: string 
  ```
     {
         "title": "Teste to-do api"
     }
 ```
 - Response:
 ```
    {
      "message": "sucess",
      "id": 1
    }
 ```
</br>

##### *PUT* Request: `/task/?id` 

 - Os dados obrigatorios são: 
     * `id`: number 
     * `title`: string
     * `status`: string 
  ```
     {
         "id": 1,
         "title": "Teste to-do api2",
         "status": "Realizado"
     }
 ```
 - Response:
 ```
    {
    }
 ```
</br>

##### *DELETE* Request: `/task/?id` 

 - Os dados obrigatorios são: 
     * `id`: number 
  ```
     {
         "id": 1
     }
 ```
 - Response:
 ```
    {
    }
 ```

</br>
