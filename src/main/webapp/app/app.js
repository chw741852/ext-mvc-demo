/**
 * Created by cai on 2014/7/20 17:01.
 */
Ext.application({
    name: 'Pandora',    // 为应用程序起一个名字，相当于命名空间
    contorllers: [ 'GoodsController' ], // 声明所用到的控制层
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
                xtype: 'goodslistview'
            }]
        });
    }
});