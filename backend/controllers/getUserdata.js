const jwt = require('jsonwebtoken');
const prisma = require('./prisma_initilization');
const getUser = async (req,res) =>
    {
        try {
            
            const cookies = req.cookies;
            if(!cookies?.jwt) return res.status(404).json({Message:'Cookie is Missing'});
            const token = cookies.jwt;
            const validUser = await prisma.users.findUnique({
                where: {
                  referenceToken:token,
                },
              });

              
            //removing password & reference token and rest sending to user
            const toUser = Object.keys(validUser).filter(objKey => objKey !== 'password' && objKey !== 'referenceToken').reduce((newObj,key)=>{newObj[key]=validUser[key];return newObj;},{});
            if(!validUser)
                {
                    return res.status(401).json({Message:'Looks like you are not logged in'});
                }
            return res.status(200).json({user : toUser});
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    }
module.exports = {getUser};