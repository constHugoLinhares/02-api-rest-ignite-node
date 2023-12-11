import fastify from 'fastify'

export const app = fastify()

app.get('/hello', () => {
    console.log('hello')
})