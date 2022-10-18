const {Schema, model} = require('mongoose');

const AnswerModel = new Schema({
  answer_id: Number,
  body: String,
  date_written: Date,
  answerer_name: String,
  helpfulness: Number,
  reported: Boolean,
  photos: [{
    id: Number,
    url: String,
  }]
});

const Answer = model('Answers', AnswerModel);
module.exports = Answer;
