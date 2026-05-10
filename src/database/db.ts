import knex from 'knex';
import 'dotenv/config';
import config from './knexfile';

const env = (process.env.NODE_ENV || 'development') as keyof typeof config;

const db = knex(config[env]);

export default db;
