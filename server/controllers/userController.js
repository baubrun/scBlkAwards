const router = require("express").Router()
const User = require("../models/User")
const upload = require("./multerHelper")
const bcrypt = require("bcryptjs")
const SALT_FACTOR = 10

router.post("/inscription", upload.none(), async (req, res) => {
    const {
        username,
        password,
    } = req.body

    await User.findOne({
        username: username
    }, async (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: err,
            })
        }
        if (user) {
            return res.json(
                [{
                    msg: "Username already exists."
                }]
            )
        } else {
            const hashedPassword = await bcrypt.hash(password, SALT_FACTOR)

            try {

                const newUser = User({
                    username: username,
                    password: hashedPassword,
                })
                await newUser.save()

                return res.json({
                    success: true,
                    message: "Enregistré !",
                })
            } catch (error) {
                return res.json({
                    success: false,
                    message: error.message,

                })
            }
        }
    })
})



router.post("/connect", upload.none(), async (req, res) => {
    const givenPassword = req.body.password
    const givenUsername = req.body.username


    await User.findOne({
        username: givenUsername
    }, async (err, user) => {
        if (err) {
            return res.json({
                success: false,
                message: err,
            })
        }
        if (!user) {
            return res.json({
                success: false,
                message: "Secret ou Nom invalide."
            })
        }
        try {
            if (await bcrypt.compare(givenPassword, user.password)) {
                return res.json({
                    success: true,
                    user: user.username
                })
            } else {
                return res.json({
                    success: false,
                    message: "Secret ou Nom invalide."
                })
            }
        } catch (error) {
            return res.json({
                success: false,
                message: error.message,
            })
        }
    })
})


module.exports = router