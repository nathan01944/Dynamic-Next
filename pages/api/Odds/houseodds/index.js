import Redis from 'ioredis'

let redis = new Redis("rediss://:1ab8f665ce744567ba3c4ee12ed4c869@us1-upward-lioness-34844.upstash.io:34844");

export default async (req, res) => {
   let start = Date.now();
   let cache = await redis.hgetall("odds")
   let result = {}
   if (cache) {
       console.log("loading from cache")
       result.data = cache
       result.type = "redis"
       result.latency = Date.now() - start;
       return res.status(200).json(result)
   } else {
    res.status(404).json({ message: `Data not found.` })
  }
}