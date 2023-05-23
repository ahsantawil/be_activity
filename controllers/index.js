export const getIndex = async (req, res) => {
    try {
        res.render('views/index')
    } catch (error) {
        res.redirect('/')
    }
};