# tablistの保存する方法について
### 問題内容
画面をリフレッシュするとき、tablistの行列はなくたった。
### 解決方法
vueUseのuseCookiesを用いて、tablistの情報を保存すること（tokenの扱い方と同じである）

> 保存する場合
```javascript
import { useCookies } from '@vueuse/integrations/useCookies'
const cookies = useCookies(['locale'])
cookies.set('tablist',editableTabs.value)

```
> 読み込む場合
```javascript
cookies.get('tablist',editableTabs.value)
```
> 消す場合
```javascript
cookies.remove('tablist',editableTabs.value)

```