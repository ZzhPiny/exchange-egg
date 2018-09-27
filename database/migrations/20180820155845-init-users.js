'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('prepublish', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
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
      company_name: STRING,
      company_address: STRING,
      legal_person: STRING,
      setup_date: DATE,
      page_path: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
