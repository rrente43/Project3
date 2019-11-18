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
    // req.logout();
    // res.redirect('/');
});
//auth google
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
    
}));


router.get("/login/success", (req, res) => {
    if (req.user) {
      res.json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
        cookies: req.cookies
      });
    }
  });


router.get(
    "/google/redirect",
    passport.authenticate("google", {
      successRedirect: CLIENT_HOME_PAGE_URL,
      failureRedirect: "/auth/login/failed"
    },
    )
  );

//   router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/public/index.html"));
//   });
  

module.exports = router;

