import pg from "pg"
import dotenv from "dotenv"

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
    user:process.env.PGUSER,
    host:process.env.PGHOST,
    database:process.env.PGDATABASE,
    password:process.env.PGPASSWORD,
    port:Number(process.env.PGPORT),
    max:20,//max connections in the pool
    idleTimeoutMillis:30000,
    connectionTimeoutMillis:2000
});
pool.on('connect',()=>{
    console.log('Database connected successfully');
});