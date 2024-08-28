<!-- React -->


<!-- npm -->
<!-- 
npm is package manager we can create our own package in our project so bascially when we do npm create-react-app is basically gives you the existing packages which are already present but we can create our own react app without using existing packages -->

<!-- how do we do it -->
<!-- By using npm init we can give our own package name our version our authors name , aur keywords etc so once you use npm init this will create our package.json file -->

<!-- what does package.json file mean? -->
<!-- 
It means that package.json is a configuration to our npm 
Its also mean it keeps track of all the dependies which we are installing in our app

 -->


<!-- install more packages / dependencies in out project the most powerful and important package in our project is bundler -->
<!-- what are bundlers ? -->
<!-- Bundlers are nothing but all the html css and javascript files are get compressed are get cache are gets bundle together and then shift to the production this is the job of bundler 
we have budlers such as webpack,parcel,vit this are all bundlers
create-react-app behind the scene uses webpack, babbel bundlers 
-->

<!-- we will be using parcel as bundler in our project because its configuration is easy and fast -->

<!-- how do we install parcel in our app -->
<!-- use the command npm install -D parcel 
* when we insatall packages we have 2 dependency 
1. Normal dependencies - this is been used in production 
2. Dev dependiencies - when we are developing our app we need dev dependiencies
-->

<!--Once you install parcel you will see the verison of "parcel": "^2.9.3" so ^ means carent -->
<!-- what does the ^ carent mean why we use it ? -->
<!-- suppose tommorow a new verison comes 2.9.4 so what carent will do it will upgrade automatically to 2.9.3 to 2.9.4 -->
<!-- if its a minor upgrade it will upgrade to 2.9.4 -->

<!-- another we have tilldey what does that mean so suppose it we donot put any carent before version then it will be consider as tilldey so suppose we have new  verison like 3.4.0 then it will automatically update from 2.9.3 to 3.4.0 -->
<!-- this upgrade will be major upgrade in our project -->
<!-- its better to place caret before version because its ok to upgrade minor version but dont upgrade major if you upgrade major lot of changes may get break in your application  -->


<!-- package.json Vs package-lock.json -->
<!-- package.json it may have carent or tilldey on version it keeps approx version -->
<!-- package-lock.json it keeps track of exact version  -->


<!-- we have integrity present in parcel what does it mean -->
<!-- 
      "integrity": "sha512-2GTVocFkwblV/TIg9AmT7TI2fO4xdWkyN8aFUEVtiVNWt96GTR3FgQyHFValfCbcj1k9Xf962Ws2hYXYUr9k1Q==",
        why this sha is present because you have heard like its working on local properly why its not working on production
        it basically keeps the track of version which is install locally which is present must be same goes on production
 -->

 <!-- what are node modules -->
 <!-- node modules contains all the code which we fetch from npm -->
 <!-- when we do npm install parcel it goes to the production of npm and fetching all the code of parcel and putting into node module -->
 <!-- node modules is like a database -->

 <!-- Note 
 our project has parcel dependecies but parcel is itself having multiple dependencies this is called as transcition dependencies
 -->


 <!-- Note
 
if we have package.json and package-lock.json you can recreate all the node modules  -->



<!-- 2 Type of Routing in web application -->
   <!-- - Client Side Routing
   - Server Side Routing -->

<!-- Single Page Application -->
<!-- it has only one page but the components are getting 
interchange with the help of client side routing  -->



<!-- npm Vs npx -->
<!-- if you want to install a package we use npm  -->
<!-- if you want to execute those packages we use npx example npx parcel index.html executing parcel -->

<!-- Note -->
<!-- cdn link are not the prefferd way to inject react in our project we use npm  -->
<!-- why we cannot use cdn link because it may get costly for us we need to have a network call to unpkg.com and then it will bring react  -->
<!-- instead what we can have is we can have react in our node modules that makes us easy -->

# Parcel
- Dev Build
- Local Server
- Refreshing Page Automatically (HMR- HOT MODULE REPLACEMENT)
- How Browser get refresh automatically because it has (File Watching Algorithm)
- Caching- Faster Builds
- Image Optimization
- Bundling
- Minification
- Compressing
- Differential Bundling - support older browser
- Error handling
- HTTPS
- Tree shaking (suppose you have 100 functions out of that 5 functions are getting used parcel will remove unwanted codes it will tree shake)
