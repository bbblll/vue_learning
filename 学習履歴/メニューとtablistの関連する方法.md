# メニューとtablistを関連させる方法について
## 問題の内容
![avatar](./imgs/2.png)
1. 右にあるメニューと上にあるtablistはroute.pathを変更することができますが、メニューを用いてroute.pathを変更する場合、tablistの値は変わらない、tablistを用いてroute.pathを変更する場合も、メニューの値も変わらないという問題がある。
2. メニューで新しいpathにいくと、tablistに新しいpathを追加する必要がある。
3. tablistのメンバーを一つ消すとき、消すメンバーのpathは目前のpathと同じとなった場合も、route.pathの値を変更する必要がある
> ## 問題１の対策、vue-routeのonBeforeRouteUpdateという方法を使う！
&ensp;onBeforeRouteUpdateとは、他のpathに行く前、何をすればいいと考えている時に使う関数である。そして、今のすべきことは、onBeforeRouteUpdateを使って、メニューとtablistの値を更新することである。コードは以下となる
> useTabs.js

```javascript
//pageが変更する前、active tabを変更する
    onBeforeRouteUpdate((to) => {
        //clickされたtabのnameはpathと同じ場合
        if (editableTabsValue.value == to.path) return
        //clickされたtabのnameはpathと違う場合
        //そして、tabはまだ追加されたかどうかを確認する
        let item = editableTabs.value.find(o => {
            return o.name == to.path
        })
        //追加されていない場合
        if (!item) {
            let newtab = {
                name: to.path,
                meta: to.meta
            }
            editableTabs.value.push(newtab)
            cookies.set('tablist',editableTabs.value)
        }
        editableTabsValue.value = to.path
    })
```