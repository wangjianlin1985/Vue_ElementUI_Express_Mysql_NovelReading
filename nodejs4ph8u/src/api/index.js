import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import DianzishuController from './Dianzishu'
import FenleiController from './Fenlei'
import StoreupController from './Storeup'
import NewsController from './News'
import DiscussdianzishuController from './Discussdianzishu'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/dianzishu', DianzishuController({ config, db }))

	api.use('/fenlei', FenleiController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/discussdianzishu', DiscussdianzishuController({ config, db }))

	return api
}
