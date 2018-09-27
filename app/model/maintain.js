module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Maintain = app.model.define('Maintain', {
        id: { // 自增索引id
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        departmentName: { // 维护该企业的部门名称
            type: STRING,
            field: 'department_name'
        },
        personName: { // 维护该企业的人员
            type: STRING,
            field: 'person_name'
        },
        maintainType: { // 维护的企业分类
            type: STRING,
            field: 'maintain_type'
        },
    }, {
        tableName: 'department_maintain1'
    });

    Maintain.associate = (models) => { };

    Maintain.findOneByDep = (department) => {
        Maintain
            .findOne({
                where: {
                    departmentName: department
                },
            })
            .then((result) => {
                if (!!result) {
                    return void 0;
                }
                return item;
            });
    }
    return Maintain;
};