const pullUser = (req,res) =>
    {
        const cookies = req.cookies;
        if(!cookies?.jwt) return res.status(404).json({Message:'Cookie is Missing'});
        const emailencrypted = cookies.emenc;
        const emailurl = req.body.emailenc;
        try {
            if(!emailencrypted)
                {
                    return res.sendStatus(404);
                }
            if(!emailurl)
                {
                    return res.sendStatus(404);
                }
            if(emailencrypted !== emailurl)
                {
                    return res.sendStatus(401);
                }
            return res.status(200).json({Message:'Verified user'});
        } catch (error) {
            console.log(error);
            return res.status(500).json({Message : 'Unable to fetch'});
        }
        
        
    }
module.exports = {pullUser};