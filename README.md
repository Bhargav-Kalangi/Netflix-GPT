- Before creating app
(npm config set legacy-peer-deps true) 
execute the above command, so that we will not encounter peer dependencies issues
- Create React App (npx create-react-app my-netflix-gpt)
- cd my-netflix-gpt
- npm start 
(you may encounter some errors
Require stack:
- C:\Users\Dell\Netflix-GPT\my-netflix-gpt\node_modules\ajv-keywords\dist\definitions\typeof.js
- C:\Users\Dell\Netflix-GPT\my-netflix-gpt\node_modules\ajv-keywords\dist\keywords\typeof.js
- C:\Users\Dell\Netflix-GPT\my-netflix-gpt\node_modules\ajv-keywords\dist\keywords\index.js
- C:\Users\Dell\Netflix-GPT\my-netflix-gpt\node_modules\ajv-keywords\dist\index.js
- C:\Users\Dell\Netflix-GPT\my-netflix-gpt\node_modules\schema-utils\dist\validate.js
- C:\Users\Dell\Netflix-GPT\my-netflix-gpt\node_modules\schema-utils\dist\index.js
- C:\Users\Dell\Netflix-GPT\my-netflix-gpt\node_modules\webpack-dev-server\lib\Server.js
- C:\Users\Dell\Netflix-GPT\my-netflix-gpt\node_modules\react-scripts\scripts\start.js
)
to resolve the above error:
- execute this command: npm install --save-dev ajv@^7
- npm start
- configure Tailwind css
- login page created
- sign in/sign up also created
- form validation
- usage of useRef hook
- creation of project in firebase
- steps to deploy in firebase
- configured Store and Userslice created
- Manage users in Firebase 
- useNavigation included
- sign in , sign up ,sign out all are working
- Register TMBD app
- create main container
   . create VideoTitle file which contains Title, description, play button, moreinfo button
   .create VideoBackground which contains youtube video
- created secondary container
 . create MovieList component, get title, poster_path secondary container as a prop, display title and MovieCards
 . create moviecard and display all the cards
 . created custom hooks for top rated, popular, Block buster, Tv series, upcoming movies
