import { Router } from "express";

import { saveContact } from "../controller/contact.controller";


const router = Router();

router.post("/contact", saveContact)




export default router;