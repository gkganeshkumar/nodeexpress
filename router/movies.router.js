import express from "express";
import {movieCreat,movieDelete,movieUpdate,movieIndex} from "./moviesController/controller";

const router =express.Router();


// get data
router.get('/',movieIndex);

//creat data
router.post('/',movieCreat);

//updata data

router.put('/:id',movieUpdate);

//delete data

router.delete('/:id',movieDelete)
        
export default router;