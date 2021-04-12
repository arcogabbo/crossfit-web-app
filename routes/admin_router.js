const admin_controller=require('../controllers/admin_controller.js')
const express=require('express')
const utility=require('../utility/utility.js')
const router=express.Router()

router.get('/administrate',utility.auth,admin_controller.admin_panel)

router.get('/administrate/certificates', utility.auth, admin_controller.show_certificates)

router.get('/administrate/lessons', utility.auth, admin_controller.admin_lessons)

router.get('/administrate/news', utility.auth, admin_controller.admin_news)

router.put('/user',utility.auth,admin_controller.accept_user)

router.post('/lesson',utility.auth,admin_controller.book)

router.delete('/lesson',utility.auth,admin_controller.delete_lesson)

router.get('/certificate',utility.auth,admin_controller.get_certificates)

router.put('/certificate',utility.auth,admin_controller.update_certificates)

router.delete('/certificate',utility.auth,admin_controller.delete_certificates)

router.delete('/news',utility.auth,admin_controller.delete_news)

router.put('/news',utility.auth,admin_controller.update_news)

router.post('/news',utility.auth,admin_controller.create_news)

module.exports=router