import { api } from "@nitric/sdk";

const helloApi = api('main');

helloApi.get("/hello/:name", async (ctx) => {
    const { name } = ctx.req.params;
    
    console.log(name);
    
    ctx.res.body = `Hello ${name}`;

    return ctx;
});
