import { connect } from 'mongoose';

const mongoUlr = process.env.MONGO_URL;

mongoUlr ? connect(mongoUlr) : console.warn('env não encontrada');
