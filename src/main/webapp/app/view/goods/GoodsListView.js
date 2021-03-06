/**
 * Created by cai on 2014/7/20 17:29.
 *
 * 商品view层，这里只是一个显示的grid，没有逻辑代码
 */
Ext.define('Pandora.view.goods.GoodsListView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.goodslistview',
    title: '商品列表',
    store: 'GoodsStore',
    columns: [
        { header: '商品编码', dataIndex: 'bm' },
        { header: '商品名称', dataIndex: 'name' }
    ],
    tbar: [
        { text: '测试1', action: 'testBtn1' },
        ' - ',
        { text: '测试2', action: 'testBtn2' }
    ]
});
