import mongoose from 'mongoose';
import config from '../../utils/configs.js';

const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    mongoose.connect(config.mongoURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
    }, (error) => {
        if (error) {
            console.log('mongodb error', error);
        } else {
            console.log('mongodb connected');
        }
    });
};

mongoose.connection.on('error', (error) => {
    console.error('mongodb error', error);
});
mongoose.connection.on('disconnected', () => {
    console.error('mongodb 연결 끊김. 연결 재시도.');
    connect();
});

export default connect;