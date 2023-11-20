
## Path
#### /api/register
``` js
{
    email:""
    password:""
    firstname:""
    lastname:""
    nickname:""
}
```



####  /api/login
```js
{
    email:""
    password:""
}
```

```js
return {message:"some message", token:"eyJhbGciOi..."}
```

#### /api/create
```js
{
    hearders: "authorization":"eyJhbGciOi..."
},{
    title:""
    content:""
}
```



#### /api/render
```js
{
    hearders: "authorization":"eyJhbGciOi..."
}
```

```js
    return {object}
```

#### /api/render/one/title
```js
{
    hearders: "authorization":"eyJhbGciOi..."
}
```

```js
    return {object}
```