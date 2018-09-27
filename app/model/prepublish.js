module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const PrePublish = app.model.define('PrePublish', {
        id: { // 自增索引id
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startTime: { // 披露开始时间
            type: STRING(14),
            field: 'start_time'
        },
        endTime: { // 披露截止时间
            type: STRING(14),
            field: 'end_time'
        },
        exchange: { // 交易所
            type: STRING,
            field: 'exchange'
        },
        type: { // 项目类型
            type: STRING,
            field: 'type'
        },
        code: { // 项目编号
            type: STRING,
            field: 'code'
        },
        projectName: { // 项目名称
            type: STRING,
            field: 'project_name'
        },
        subProjectName: { // 子项目
            type: STRING,
            field: 'sub_project_name'
        },
        trade: { // 所属行业
            type: STRING,
            field: 'trade'
        },
        transferParty: { // 转让方
            type: STRING,
            field: 'transfer_party'
        },
        ownStock: { // 拥有的股权
            type: STRING,
            field: 'own_stock'
        },
        transferStock: { // 即将转让的股权
            type: STRING,
            field: 'transfer_stock'
        },
        parentGroup: { // 隶属集团
            type: STRING,
            field: 'parent_group'
        },
        clientName: { // 客户名称
            type: STRING,
            field: 'client_name'
        },
        department: { // 维护人员所属部门
            type: STRING,
            field: 'department'
        },
        maintain: { // 维护人员名称
            type: STRING,
            field: 'maintain'
        },
        handlePerson: { // 经办人员名称
            type: STRING,
            field: 'handle_person'
        },
        companyName: {  // 项目涉及公司名称
            type: STRING,
            field: 'company_name'
        },
        companyAddress: { // 公司地址
            type: STRING,
            field: 'company_address'
        },
        legalPerson: { // 公司法人
            type: STRING,
            field: 'legal_person'
        },
        setupDate: { // 公司创建时间
            type: DATE,
            field: 'setup_date'
        },
        pagePath: { // 项目页面路径
            type: STRING,
            field: 'page_path'
        }
    }, {
        tableName: 'beforehand_publish'
    });

    PrePublish.associate = (models) => { };

    PrePublish.findOneByCode = (code) => {
        PrePublish
            .findOne({
                where: {
                    code
                },
            })
            .then((result) => {
                if (!!result) {
                    return void 0;
                }
                return item;
            });
    }
    return PrePublish;
};