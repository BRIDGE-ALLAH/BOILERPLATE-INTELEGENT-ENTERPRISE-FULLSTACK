import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.connect().catch(err => {
  console.error('Redis connection error:', err);
  process.exit(1);
});

export default redisClient;