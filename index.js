const jsonserver=require('json-server')
const empserver=jsonserver.create()
const middleware=jsonserver.defaults()
const router=jsonserver.router("db.json")
const port=3000||process.env.port


empserver.use(middleware)
empserver.use(router)

empserver.listen(port,()=>{
    console.log(`Employee server listens to port ${port}`);
})
