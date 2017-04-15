const amqp = require('amqplib/callback_api');

amqp.connect('amqp://127.0.0.1', (err, connection) => {
    connection.createChannel((err, chanel) => {
        const queue = 'test_query';

        chanel.assertQueue(queue, {durable: false});
        console.log(`RabbitMQ logger: Waiting for messages in ${queue}. 
                    To exit press CTRL+C`);

        chanel.consume(queue, (msg) => {
            const parseMsg = msg.content.toString();
            console.log(msg);
            console.log(`RabbitMQ logger: ${parseMsg}`);
        }, {noAck: false});
    });
});