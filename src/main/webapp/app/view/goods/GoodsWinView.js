/**
 * Created by cai on 2014/7/20 17:33.
 */
Ext.define('Pandora.view.goods.GoodsWinView', {
    extend: 'Ext.window.Window',
    alias: 'widget.goodswinview',
    title: '测试',
    autoshow: false,
    height: 200,
    width: 300,
    initComponent: function() {
        this.buttons = [
            {
                text: '点我改变标题',
                scope: this,
                action: 'ok'
            },
            {
                text: '关闭',
                scope: this,
                handler: function() {
                    this.close();
                }
            }
        ];
        this.callParent();
    }
});
