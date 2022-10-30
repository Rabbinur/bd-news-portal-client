/*
BASIC PROJECT SETUP

1.create firebase app
2.get firebase configuration inside firebase.config.js 
3.make sure to export app from firebase config
4.create a react app
5.install firebase and react router dom
5.install bootstrap and react-bootstrap
6.make sure to import bootstrap css in the index.js file
7.

*/

/*
ROUTER SETUP
1.create routes component into src
2.exports routes and create path 
firster ta multo main layout er raki etar children hisebe baki path create kori r ki
and goto app.js and import ROuterPRovider
*/
/* Email verification
1. goto auth provider create a function emailVerification
    --set it authinfo
2.goto register page
  --handleEmailVerification
  --set it createuser
  --set a toast for a notification
3.goto login page
  --navigate change to 
  with condition if(user.emailvarifiaction){navigate(from,{raplace})}
  else{toast} 
  goto useEffect()   
  ---change setuser into with condition
      if (currentUser==null || currentUser.emailVerified) {
        setUser(currentUser);
      }
  goto login page
    -- sign in niche .catch er niche
    --finally (()=>{
        setLaoding(false)
    })    



*/
