import { Router } from "express";
import auth from "../middleware/auth.js";
import { AddSubCategoryController } from "../controllers/subCategory.controller.js";
import { getSubCategoryController } from "../controllers/subCategory.controller.js";
import { updateSubCategoryController } from "../controllers/subCategory.controller.js";
import { deleteSubCategoryController } from "../controllers/subCategory.controller.js";


const subCategoryRouter = Router()

subCategoryRouter.post('/create',auth,AddSubCategoryController)
subCategoryRouter.post('/get',getSubCategoryController)
subCategoryRouter.put('/update',auth,updateSubCategoryController)
subCategoryRouter.delete('/delete',auth,deleteSubCategoryController)

export default subCategoryRouter