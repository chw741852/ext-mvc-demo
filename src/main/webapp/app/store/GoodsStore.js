/**
 * Created by cai on 2014/7/20 17:14.
 *
 * 商品store
 */
Ext.define('Pandora.store.GoodsStore', {
    extend: 'Ext.data.Store',
    model: 'Pandora.model.GoodsStore',
    autoLoader: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'app/goods.json'  // 数据接口
        },
        reader: {
            type: 'json',
            root: 'results',
            successProperty: 'success'
        }
    }
});
