const Service = require('egg').Service;

class Maintain extends Service {
    async getMaintainDataByDep(department) {
        return await this.ctx.model.Maintain.findOneByDep(department);
    }
}

module.exports = Maintain;