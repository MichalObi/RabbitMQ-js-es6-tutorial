const amqp = require('amqplib/callback_api');

amqp.connect('amqp://127.0.0.1', (err, connection) => {
    connection.createChannel((err, chanel) => {
        const queue = 'test_query';
        const msg = 'Hello World!';

        chanel.assertQueue(queue, {durable: false});
        chanel.sendToQueue(queue, Buffer.from(msg));

        console.log(`RabbitMQ logger: Sent ${msg}`);
    });
    setTimeout(() => { connection.close(); }, 500);
});