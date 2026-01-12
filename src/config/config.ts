// importing modules
import dotenv from 'dotenv';

console.log('Config module loaded');

dotenv.config();

interface Config {
    port: number,
    nodeEnv: 'development' | 'production' | 'test';
};

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development'
};

export default config ;