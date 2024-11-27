import {mkdirSync} from "fs"
import {type Route} from "mocks-server-lite"
import multer from "multer"
import path from "path"

import {SuccessResponse} from "../../src/types"

const SUCCESS: SuccessResponse = {result: "Uploaded!"}

const UPLOAD_PATH = path.join(__dirname, "../uploads")

const storage = multer.diskStorage({
  destination(req, file, cb) {
    mkdirSync(UPLOAD_PATH, {recursive: true})
    cb(null, UPLOAD_PATH)
  },
  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const upload = multer({storage})

const route: Route = {
  id: "upload-pic",
  url: "/api/profile",
  method: "POST",
  variants: [
    {
      id: "success",
      type: "handler",
      middleware: [upload.single("file")],
      response: (_, res) => {
        res.status(200)
        res.send(SUCCESS)
      },
    },
  ],
}

export default route
