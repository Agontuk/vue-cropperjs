# vue-cropperjs
基于[cropperjs](https://github.com/fengyuanchen/cropperjs)封装的Vue图片裁剪组件。

[![NPM](https://nodei.co/npm/vue-cropperjs.png?downloads=true)](https://nodei.co/npm/vue-cropperjs/)

## 示例
点击这里：**[agontuk.github.io/vue-cropperjs](https://agontuk.github.io/vue-cropperjs/)**

## 安装

```shell
npm install --save vue-cropperjs
```

若你的Vue 1.0是版本, 使用：

```shell
npm install --save vue-cropperjs@1.0.3
```
> 你需要webpack的css & style loader

## 用法

```js
// 全局
import Vue from 'vue';
import VueCropper from 'vue-cropperjs';
Vue.component(VueCropper);

// 局部
import VueCropper from 'vue-cropperjs';
export default {
  components: { VueCropper}
}

...
<vue-cropper
  ref="cropper"
  :src="imgSrc"
  alt="Source Image"
  :cropmove="cropImage"
>
</vue-cropper>
...

this.$refs.cropper.rotate(45);
```
可以查看[example](https://github.com/Agontuk/vue-cropperjs/tree/master/example) 文件 和 [cropperjs](https://github.com/fengyuanchen/cropperjs#cropperjs) 文档

## 选项

| 名称           | 类型    | 是否必传 | 描述                    |
| -------------- | -------- | -------- | ------------------------------- |
| src            | `string` | --       | 图片资源                   |
| containerStyle | `object` | --       | 图片资源容器的样式 |
| imgStyle       | `object` | --       | 图片的样式          |
| alt            | `string` | --       | 图片的alt文本   |

## cropperjs相关
查看 [cropperjs文档](https://github.com/fengyuanchen/cropperjs#options) 查看更多的属性和方法。

## 重命名方法

- `zoom` -> `relativeZoom`
- `crop` -> `initCrop`

## License

MIT
