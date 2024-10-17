
# Comic Book Management API
This project is a backend service for a React-based comic store that allows the management and display of comic books as inventory items. The API supports CRUD (Create, Read, Update, Delete) operations .


## Installation

Install my-project with npm


```bash
  npm install my-project
  cd my-project
```
```bash
  git clone https://github.com/Chanchal361/ComicBookBackend.git
  cd ComicBookBackend
  npm install
  npm start

```
```bash
  .env
  PORT=5000
  MONGO_URL=mongodb://localhost:27017/comicBooks
 
```

## API Reference 
 #### API=http://localhost:5000
 ### Live : https://comicbookbackend.onrender.com

#### Get all items  

```http
  GET /api/comics/getall
```
#### Get item
```http
   GET  /api/comics/getById/${id}
```
fetch |

### create 
```http
 POST  /api/comics/create
```
### delete
```http
  DELETE /api/comics/delete/${id}
```
### update 
```http
  PUT  /api/comics/update/${id}
```


