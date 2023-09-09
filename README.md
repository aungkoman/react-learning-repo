# Chat with React



## 2023-09-09 User Management Module တစ််ခုလုံး လုပ်မယ်။

- [x] Login ပြီးသွားပြီ။
- [ ] Register လုပ်မယ်။
- [ ] Update လုပ်မယ်။
- [ ] ပုံတွေဘာတွေ တင်မယ်။

ဒါဆို Local မှာ API လည်း တစ်ခါတည်းပြင်ပြီးသား ဖြစ်သွားမယ်။


Register လုပ်ဖို့ ဆိုရင် ဘာလိုမလဲ?

Reducer ဘက်ကမှာ က Register ဆိုပြီး Function တစ်ခု တိုးထားမယ်။
သူက user ကို လက်ခံပြီး user state ကိုပြင်ရင် ရပြီ။

UI Component မှာ ဘာလိုမလဲ​ကြည့်မယ်။
ဖောင်လိုမယ်။
Form Submit Handler လိုမယ်။
နောက် dispatch လုပ်မယ့် action တစ်ခုပါမယ်။
Redirect လုပ်ဖို့အတွက် Route လိုမယ်။



## 2023-09-08 State Management in React using Redux

- User ကို အရင် Manage လုပ်မယ်။ Array နဲ့ လုပ်ရမှာလား?

redux အရင် install လုပ်မယ်။

```bash
npm install redux
```

ပိုပြီး ရှင်းရှင်းလင်းလင်း နားလည်အောင်လို့ Reducer နောက်တစ်ခု ထည့်မယ်။

Article တွေ အတွက်။

Reducer တစ်ခုရေး
Central Reducer မှာ သွားကြေညာထား။
Action တွေ ရေး


ပြမယ့်နေရာမှာ connect လုပ်
- reducer က state ကို ပြ။


### Array တစ်ခုကို CRUD လုပ်နိုင်ဖို့
Functional က ပေးတဲ့ map , reduce , filter စတာတွေနဲ့ Array တစ်ခုကို CRUD လုပ်ဖို့လိုမယ်။



ဘယ် Reducer ကို သုံးမယ်။
ဘယ် Action ကို သုံးမယ် စတာတွေကို View Component တွေက ရှင်းရှင်းလင်းလင်း ကြေညာပြီး သုံးကြတယ်။



## SAMPLE CRUD using Fetch / Axios and Express Backend

- [ ] Basic Auth Workflow 
- [ ] Task Management

### Numbers of Screen

- [ ] Login
- [ ] Register
- [ ] Profile 
- [ ] Profile Edit
- [ ] Task List
- [ ] New Task Form
- [ ] Edit Task Form

ဒါဆို ရပြီ။

Routing 

https://github.com/nishant-666/React-CRUD-Operation-V2/blob/master/src/components/read.js ဒီမှာ နမူနာယူ။ State Management ကို Local Storage သုံးတာမျိုး။


State Management တစ်ခု သုံးမှ အဆင်ပြေမယ်ဆို သုံးမယ်။
အခုက ဘာတစ်ခုမှ မသုံးသေးပဲနဲ့ကို Rerender တွေ ချနေတာ။

Route ကြောင့်မို့လား?
မဟုတ်ဘူး intentionally ကို Strict Mode က လုပ်ပေးနေတာတဲ့။
development stage မှာပေါ့။

https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode/61897567#61897567


အခု ခေါ်ရမယ့် API Call က

- [x] Login
- [ ] Register
- [ ] Update Profile
- [ ] Delete Account
- [ ] Shop -> CRUD
- [ ] Category -> CRUD 
- [ ] Menu -> CRUD
- [ ] Item -> CRUD

State Management အရင်လိုမယ်။
လောလောဆယ် User Info ကို Screen တစ်ခုနဲ့တစ်ခု မျှသုံးဖို့ အဆင်မပြေဘူးဖြစ်နေပြီ။

-----------------

React သုံးပြီး Chat Room UI တစ်ခု ဖန်တီးမယ်။

ပါမယ့် Component တွေက

- conversation list
- coversation detail
- user detail


## Section အလိုက် Component တွေ ဆောက်ချင်တယ် ဘယ်လိုလုပ်ရမလဲ?



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
