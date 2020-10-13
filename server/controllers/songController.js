const router = require("express").Router()
const Song = require("../models/Song")
const upload = require("./multerHelper")
const fs = require("fs")
const onFinished = require("on-finished")
const path = require("path")

const moveFilesToApp = () => {
    let rootPath = path.dirname(process.cwd())
    let imgPath = rootPath + "/server/uploads"
    let newPath = rootPath + "/src/media"
    let found = []
    fs.readdir(imgPath, (err, files) => {
        if (err) return console.log(err)
        files.forEach(f => {
            found.push(f)
        })

        found.forEach(f => {
            fs.rename(`${imgPath}/${f}`, `${newPath}/${f}`, (err) => {
                if (err) throw err
            })
        })

    })
    console.log()
}


/*===============
GET
==================*/
/**
 * @GET 
 * @desc get songs from db
 * @returns success bool and data
 */

router.get("/load-songs", async (req, res) => {
    try {
        const songs = await Song.find({})
        
        if (songs) {
            return res.status(200).json({
                data: songs,
                success: true,
            })
        } else {
            return res.json({
                success: false,
                message: "Song not found."
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
})





/*===============
POST
==================*/



/**
 * @POST 
 * @desc insert audio in db
 * @returns success bool
 */
router.post("/upload-song", upload.any(), async (req, res, ) => {
    // console.clear()
    // console.log('req.body', req.body)
    // console.log('req.files', req.files)

    const {
        title,
        author,
        album,
    } = req.body

    try {
        if (!req.files) {
            return res.json({
                success: false,
                message: "No files"
            })
        } else {

            let file = ""
            let image = ""
            req.files.forEach(f => {
                if (f.mimetype === "audio/mpeg") {
                    file = f.originalname
                    // console.log('audio :>>', f)
                } else {
                    image = f.originalname
                    // console.log('pic :>>', f)
                }
            })

            const newSong = new Song({
                album: album,
                author: author,
                image: image,
                title: title,
                file: file,
            })
            await newSong.save()
            res.status(200).json({
                success: true,
                message: "success"
            })

            onFinished(res, (err) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                    })
                } else {
                    moveFilesToApp()
                }
                return
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
        })
    }


})







module.exports = router;