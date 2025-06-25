import { Elysia } from 'elysia'

const store = new Elysia()
	.state({ visitor: 0 })

export const router = new Elysia()
	.use(store)
	.get('/increase', ({ store, cookie: { name } }) => store.visitor++)