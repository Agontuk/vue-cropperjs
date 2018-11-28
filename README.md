# vue-cropperjs

A Vue wrapper component for [cropperjs](https://github.com/fengyuanchen/cropperjs).

[![NPM](https://nodei.co/npm/vue-cropperjs.png?downloads=true)](https://nodei.co/npm/vue-cropperjs/)

## Demo

Checkout here **[agontuk.github.io/vue-cropperjs](https://agontuk.github.io/vue-cropperjs/)**

## Installation

```shell
npm install --save vue-cropperjs
```

For Vue 1.0, use

```shell
npm install --save vue-cropperjs@1.0.3
```

> You will also need css & style loader for webpack

## Usage

```js
// Global
import Vue from 'vue';
import VueCropper from 'vue-cropperjs';
Vue.component(VueCropper);

// Local
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

See the [example](https://github.com/Agontuk/vue-cropperjs/tree/master/example) files & [cropperjs](https://github.com/fengyuanchen/cropperjs#cropperjs) documentation

## Options

| Name           | Type     | Required | Description                     |
| -------------- | -------- | -------- | ------------------------------- |
| src            | `string` | --       | Image source                    |
| containerStyle | `object` | --       | Styling for the image container |
| imgStyle       | `object` | --       | Styling for the image           |
| alt            | `string` | --       | Alternate text for the image    |

## Crop related options

See cropperjs [documentation](https://github.com/fengyuanchen/cropperjs#options) for all posible options & methods.

### Renamed Methods

- `relativeZoom` from `zoom`
- `initCrop` from `crop`

## License

MIT
