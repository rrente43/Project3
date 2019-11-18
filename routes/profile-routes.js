const router = require('express').Router();
const authCheck =(req,res,next) => {
    if(!req.user){
        // if not log in
        res.redirect('auth/login');
    }else{
        next();
    }
};

router.get('/',authCheck, (req, res) => {
    // res.send('you are logged in '+ req.user.username);
    // res.sendFile(path.join(__dirname, "../../client/src/components/profile"));
    // res.sendFile(path.join(__dirname, "../../client/build/index.html"));

    
    res.render('profile');
});

module.exports = router;