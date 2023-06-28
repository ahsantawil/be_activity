
module.exports = {
    viewJob: async (req, res) => {
      try {
          res.render('admin/job/view_job', {
              title: ' Jobs '
          })
      } catch (err) {
        res.redirect('/jobs')
  
      }
    },
  }