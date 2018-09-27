const Service = require('egg').Service;

class PrePublish extends Service {
    async index() {
        return await this.ctx.model.Prepublish.findAll();
    }

    async start() {
        const { ctx, service } = this;
        const exchangeData = await this.getCurrentDayList();
        const newExchangeData = exchangeData.map(async oExchangeItem => {
            const isExist = await ctx.model.PrePublish.findOneByCode(oExchangeItem.code);
            if (isExist) {
                return null;
            }
            const oMaintain = await service.maintain.getMaintainDataByDep(oExchangeItem.group);
            // 为数据设置维护人员、部门
            if (oMaintain) {
                Object.assign(oExchangeItem, oMaintain);
            }
            return oExchangeItem;
        });
        Promise.all(newExchangeData).then(aExchangeList => {
            const aNotExistData = aExchangeList.filter(oItem => oItem !== null);
            if (aNotExistData.length === 0) {
                return;
            }
            // 保存数据
            ctx.model.PrePublish.save(newExchangeData);
            // 保存页面
            this.service.page.save(dataMaintainList);
        });
    }

    async getCurrentDayList() {
        return [];
    }
};

module.exports = PrePublish;

