import { Router } from "express"
import path from "path"
import { verifyUser } from "../../middlewares/token.verify.js"
import { createUploader, createCloudinaryStorage } from "../../helpers/uploader.js"

// @setup multer
// path.join(process.cwd(), "public", "images", "profiles")
const storage = createCloudinaryStorage("purwadhika-mini-project-02-photo-profiles-shadow-garden")
const uploader = createUploader(storage)

// @import the controller
import * as ProfileControllers from "./index.js"

// @define routes
const router = Router()
router.patch("/profile/upload", verifyUser, uploader.single("file"), ProfileControllers.uploadImage)
router.get("/profile", verifyUser, ProfileControllers.getProfile)

// @export router
export default router