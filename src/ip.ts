import Elysia from "elysia";

export const ip = new Elysia()
	.derive(({ server, request }) => ({
		ip: server?.requestIP(request)
	}))
	.get('/ip', ({ ip }) => ip)