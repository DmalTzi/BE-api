
## Path
#### POST /api/register
``` js
{
    email:""
    password:""
    firstname:""
    lastname:""
    nickname:""
}
```
```js
return {message:"some message"}
```



#### POST /api/login
```js
{
    email:""
    password:""
}
```

```js
return {message:"some message", token:"eyJhbGciOi..."}
```

#### POST /api/create
```js
{
    hearders: "authorization":"eyJhbGciOi..."
},{
    title:""
    content:""
}
```



#### GET /api/render
```js
{
    hearders: "authorization":"eyJhbGciOi..."
}
```

```js
    return {object}
```

#### GET /api/render/one/title
```js
{
    hearders: "authorization":"eyJhbGciOi..."
}
```

```js
    return {object}
```