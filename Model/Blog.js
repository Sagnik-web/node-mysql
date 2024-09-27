const db = require('../DBConfig/DB.config')


const Blog = {
    create:(blogData,callback)=>{
        const sql = 'insert into blogs (title,description,user_id) values (?, ?,?);' 
        db.query(sql,[blogData.title,blogData.description,blogData.userID],callback)
    },

    getAll:(callback)=>{
        const sql = 'select u.username, b.title, b.description from blogs as b inner join users as u on b.user_id = u.id;'
        db.query(sql,callback)
    }
}


module.exports = Blog