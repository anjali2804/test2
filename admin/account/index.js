const AccountController = require('@controller/admin/account/index.js')
const withSuperAdmin = require('@middleware/withSuperAdmin.js')

module.exports = function (router) {
    router.post('/create_admin',[withSuperAdmin],AccountController.addAdminUser);
    router.delete('/delete_admin/:id',[withSuperAdmin],AccountController.deleteAdminUser)
    router.post('/image_upload',[withSuperAdmin],AccountController.imageUpload);
    router.post('/document_upload',[withSuperAdmin],AccountController.documentUpload)
    router.post('/settings',[withSuperAdmin],AccountController.createSettings);
    router.put('/settings/:id',[withSuperAdmin],AccountController.updateSettings);
    router.get('/settings',[withSuperAdmin],AccountController.getSettings);
    router.delete('/settings/:id',[withSuperAdmin],AccountController.deleteSettings);
    router.post('/sms',[withSuperAdmin],AccountController.sendSms);

}