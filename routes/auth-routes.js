const router = require('express').Router();
const passport = require('passport');

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
router.get('/google/redirect', (req,res)=>{
    res.send('you reached the cb uri');
    
    
});
module.exports = router;