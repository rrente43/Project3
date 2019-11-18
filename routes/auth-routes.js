const router = require('express').Router();
const passport = require('passport');
const CLIENT_HOME_PAGE_URL = "http://localhost:3000/roommate";

//auth login
router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/logout', (req,res)=>{
    //handle with passport
    res.send("logging out");
});
//auth google
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
    
}));

//cb route for ggogle to redirect
// router.get('/google/redirect', passport.authenticate('google'),(req,res)=>{
//     // req.user
//     // res.send(req.user );
//     res.redirect('/profile/')


router.get(
    "/google/redirect",
    passport.authenticate("google", {
      successRedirect: CLIENT_HOME_PAGE_URL,
      failureRedirect: "/auth/login/failed"
    })
  );


module.exports = router;

