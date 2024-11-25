const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongose')

class CourseController {
    //Get /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);
    }
    // [GET]/courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    // [POST]/courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPdLCyGt3rhzGZKsnYbpU5reDNxQ`;

        const course = new Course(formData);

        course.save()
            .then(() => {
                res.redirect('/');
            })
            .catch((error) => {
                console.error("Error saving course:", error);
                res.status(500).send('Error saving course');
            });

    }
    // [GET]/courses/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);

    }
    // [PUT]/courses/ID
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}
module.exports = new CourseController();
