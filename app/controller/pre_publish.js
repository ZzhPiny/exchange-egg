'use strict';

const Controller = require('egg').Controller;

class PrePublishController extends Controller {
    async index() {
        this.ctx.body = this.service.prePublish.index();
    }
}

module.exports = PrePublishController;
