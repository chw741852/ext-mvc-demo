/**
 * Created by cai on 2014/7/20 17:18.
 *
 * 商品controller层
 */
Ext.define('Pandora.controller.GoodsController', {
    extend: 'Ext.app.Controller',
    stores: [ 'GoodsStore' ],   // 声明控件要用到的store
    models: [ 'GoodsModel' ],   // 声明控件要用到的model
    view: [ 'Pandora.GoodsListView', 'Pandora.GoodsWinView' ],  // 声明控件要用到的view
    refs: [ // 相当于一个映射，这样就可以在控件层方面的通过geter取得相应的对象了
        {
            ref: 'goodslistview',
            selector: 'goodslistview'
        },
        {
            ref: 'goodswinview',
            selector: 'goodswinview'
        }
    ],
    init: function() {
        this.control({  // 这里的this相当于这个控件层
            'viewprot > goodslistview': {
                afterrender: function(gp) { // 监听goodslistview渲染
                    gp.down('button[action=testBtn1]').on('click', function() {
                        // 监听goodslistview工具条上action=testBtn1的按钮单击事件
                        this.showWin();
                    }, this);

                    gp.down('button[action=testBtn2]').on('click', function() {
                        alert(this.getGoodslistview().title());
                    }, this);
                }
            },
            'goodswinview button[action=ok]': {
                click: function() {
                    this.getGoodswinview().setTitle(Ext.util.format.date(new Date(), 'Y-m-d H:i:s'));
                }
            }
        });
    },
    showWin: function() {
        Ext.create('Pandora.view.goods.GoodsWinView').show();
    }
});
