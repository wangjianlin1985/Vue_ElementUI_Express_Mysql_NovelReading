import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 电子书
const DianzishuModel = sequelize.define('DianzishuModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shujimingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '书籍名称'
	},
	shujifengmian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '书籍封面'
	},
	fenlei: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '分类'
	},
	zuozhe: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '作者'
	},
	zhangjiemingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '章节名称'
	},
	zhangjiejianjie: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '章节简介'
	},
	zhangjieneirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '章节内容'
	},
	shujifujian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '书籍附件'
	},
	zhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '账号'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '姓名'
	},
	faburiqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('faburiqi')).format('YYYY-MM-DD')
        },
		comment: '发布日期'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'dianzishu'
})

export default DianzishuModel
