const nodemailer = require('nodemailer');

module.exports = class Email{
  constructor(options){
    this.options = options;
    this.transport = nodemailer.createTransport(options);
  }

  send(data){
    return this.transport.sendMail({
      ...data,
      from: this.options.sender
    });
  }
};
