const axios = require('axios')
const pagineteCount = 2;
const userModel = require("../models/user")

exports.get_user_list = (req, res, next) => {
    let { page } = req.query;

    axios.get(`http://localhost:4000/users?_page=${page}&_limit=${pagineteCount}`).then((result) => {
        if (result.data.length < 1 && page > 0) {
            req.query.page = page - 1;
            this.get_user_list(req, res, next)
        } else {
            res.status(200).json({
                data: result.data,
                total: result.headers["x-total-count"],
                paginate: pagineteCount,
                page: page
            })
        }

    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    })

}
exports.delete_user = (req, res, next) => {
    const { userId } = req.params;
    axios.delete(`http://localhost:4000/users/` + userId).then((result) => {
        this.get_user_list(req, res, next)
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    })
}
exports.create_user = (req, res, next) => {
    const { name, surname, phone, mail, imageUri } = req.body;
    userModel.name = name;
    userModel.surname = surname
    userModel.phone = phone
    userModel.mail = mail
    userModel.imageUri = imageUri
    axios.post('http://localhost:4000/users', userModel).then((result) => {
        console.log(result.data)
        res.status(201).json({
            msg: "Created"
        })
    }).catch((err) => {

        res.status(500).json({
            msg: err.message
        })
    })
}
exports.show_user = (req, res, next) => {
    const { userId } = req.params;
    axios.get("http://localhost:4000/users/" + userId).then((result) => {
        res.status(200).json({
            data: result.data,
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    })
}
exports.update_user = (req, res, next) => {
    const { name, surname, phone, mail, imageUri } = req.body;
    const { userId } = req.params;
    userModel.name = name;
    userModel.surname = surname
    userModel.phone = phone
    userModel.mail = mail
    userModel.imageUri = imageUri
    axios.put('http://localhost:4000/users/' + userId, userModel).then((result) => {
        console.log(result.data)
        res.status(200).json({
            msg: "Updated"
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    })
}