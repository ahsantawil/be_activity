
module.exports = {
    viewEmply: async (req, res) => {
      try {
          res.render('admin/employe/view_emply', {
              title: ' Employe '
          })
      } catch (err) {
        res.redirect('/employe')
  
      }
    },
  }