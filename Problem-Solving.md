
Isomorphic-changing [https://medium.com/codingbox/react-for-beginners-adding-assets-to-your-isomorphic-application-using-webpack-isomorphic-tools-b6b636a79d96#.j7ar8k6ko]

CSS in JS [https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e#.s8bkaoqvw]


# Problem
I realize I'm uploading the entire project folder,
instead of just the build file.
# Posed Solution
I'm gonna try to scope the heroku CL in the build folder,
while my github scope to the entire project.



Nesting Views [https://github.com/kriasoft/universal-router/blob/master/docs/api.md#nested-routes]
```
const routes = {
  path: '/admin',
  children: [
    {
      path: '/',                       // www.example.com/admin
      action: () => 'Admin Page'
    },
    {
      path: '/users',
      children: [
        {
          path: '/',                   // www.example.com/admin/users
          action: () => 'User List'
        },
        {
          path: '/:username',          // www.example.com/admin/users/john
          action: () => 'User Profile'
        }
      ]
    }
  ]
};

resolve(routes, { path: '/admin/users/john' })
  .then(result => console.log(result));
  // => User Profile
  ```




# Situation Img Local Src
### Setup:
$ npm run build -- --static --release
cd build/public/index.html

### Problem
index.html img src looks for image '/assets/img.jpg' but needs 'assets/img.jpg
Where in the webpack can I change output?




# Include City-Data
http://www.city-data.com
