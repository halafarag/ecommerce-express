## Ecommerce-Express

### Todo

// products seller user order

-- done _ products eidt delete get by id get all quer/ upddate
-- done _ postman request route
-- done _ seller sign in / up
-- done _ user login/register

<!-- order add new order  -->
<!-- isAuth=>is seller/not is registed or not  -->

- isAuth midlleware
- login/signup for seller /user
- use ia auth in products route

```
auth=>token,username
search username users
    if found =>check token
        auth =>req.isSeller=false
        not auth throw new error 401 you need to log in /user name or password is wrong

    if not found => search on seller collection if found
        auth =>req.isSeller=true
        not auth throw new error 401 you need to log in /seller name or password is wrong
    not found you need to sign 401





```

### handle request as a seller

post products seller req.isseller === true =>>>>>
false => res.401 throw ne error you cant new products

## new route

- seller => sign in / up
- user => sign up / log in

<!--
0. auth login register /seller
1. midlleware
2. complete product route query by name/ seller-name
2. start on seller router create new seller with sign-in / regiteration -->
