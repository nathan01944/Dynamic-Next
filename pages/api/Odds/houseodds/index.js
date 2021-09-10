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
// const Redis = require("ioredis");

// let client = new Redis("rediss://:1ab8f665ce744567ba3c4ee12ed4c869@us1-upward-lioness-34844.upstash.io:34844");
// client.set('do', 'da');
// console.log(client.get('do'))

// export async function getServerSideProps() {
//     // let redis = new Redis("us1-upward-lioness-34844.upstash.io");
//     let redis = new Redis("rediss://:1ab8f665ce744567ba3c4ee12ed4c869@us1-upward-lioness-34844.upstash.io:34844");
//     //const data = await redis.incr("counter");
//     //redis.set('foo', 'bar');
//     //redis.hset("game","sport","soccer")
//     //redis.hset("game","gameid","123")
//     //redis.hset("game","odds",'{"home":"120", "away":30, "state":"New York"}')
//     // const data = await redis.get('foo')
//     //const data = await redis.hgetall("game")
//     const data = await redis.hgetall('odds')
//     redis.quit()
//     return { props: { data } }
//   }