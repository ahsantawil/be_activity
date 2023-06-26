const Department = require('../../app/db/models/tbdept');

module.exports = {
    viewDepartment : async (req, res) => {
        try {
          res.render('admin/department/view_department', {
            title: 'Department'
          })
        } catch (error) {
          res.redirect('/department')
        }
    },
  
}