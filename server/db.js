import mariadb from 'mariadb'

const pool = mariadb.createPool({
    host: 'chat-db',
    user: 'root',
    password: 'Password1',
    database: 'ChatDB'
})

export default pool