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
