
module.exports = {
    viewCreateActivityRev: async (req, res) => {
      try {
      //   const alertMessage = req.flash("alertMessage")
      //   const alertStatus = req.flash("alertStatus")
  
      //   const alert = { message: alertMessage, status: alertStatus }
      //   if (req.session.user === null || req.session.user === undefined) {
      //     res.render('admin/users/view_signin', {
      //       alert,
      //       title : 'Halaman signin'
      //     })
      //   } else {
      //     res.redirect('/dashboard')
      //   }
          res.render('admin/activity/create', {
              title: 'Form - Activity '
          })
      } catch (err) {
      //   req.flash('alertMessage', `${err.message}`)
      //   req.flash('alertStatus', 'danger')
        res.redirect('/activity')
  
      }
    },

    viewActivityRev : async (req, res) => {
      try {
        res.render('admin/activityRev/activity_review', {
          title: 'Report - Activity '
        })
      } catch (error) {
        res.redirect('/activity')
      }
    },

    // viewData : async (req, res) => {
    //   try {
    //     res.render('admin/activity/view_activity', {
    //       title: 'Report - Activity '
    //     })
    //   } catch (error) {
    //     res.redirect('/activity')
    //   }
    // }
}