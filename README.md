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
import 'cropperjs/dist/cropper.css';
Vue.component(VueCropper);

// Local
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
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

## More Options  ( from cropperjs )

### viewMode

- Type: `Number`
- Default: `0`
- Options:
  - `0`: no restrictions
  - `1`: restrict the crop box to not exceed the size of the canvas.
  - `2`: restrict the minimum canvas size to fit within the container. If the proportions of the the canvas and the container differ, the minimum canvas will be surrounded by extra space in one of the dimensions.
  - `3`: restrict the minimum canvas size to fill fit the container. If the proportions of the canvas and the container are different, the container will not be able to fit the whole canvas in one of the dimensions.

Define the view mode of the cropper. If you set `viewMode` to `0`, the crop box can extend outside the canvas, while a value of `1`, `2` or `3` will restrict the crop box to the size of the canvas. A `viewMode` of `2` or `3` will additionally restrict the canvas to the container. Note that if the proportions of the canvas and the container are the same, there is no difference between `2` and `3`.

### dragMode

- Type: `String`
- Default: `'crop'`
- Options:
  - `'crop'`: create a new crop box
  - `'move'`: move the canvas
  - `'none'`: do nothing

Define the dragging mode of the cropper.

### initialAspectRatio

- Type: `Number`
- Default: `NaN`

Define the initial aspect ratio of the crop box. By default, it is the same as the aspect ratio of the canvas (image wrapper).

> Only available when the  the `aspectRatio` option is set to `NaN`.

### aspectRatio

- Type: `Number`
- Default: `NaN`

Define the fixed aspect ratio of the crop box. By default, the crop box is free ratio.

### data

- Type: `Object`
- Default: `null`

The previous cropped data if you had stored, will be passed to `setData` method automatically when initialized. Only available when the `autoCrop` option is set to `true`.

### preview

- Type: `Element`, `Array` (elements), `NodeList` or `String` (selector)
- Default: `''`
- An element or an array of elements or a node list object or a valid selector for [Document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

Add extra elements (containers) for previewing.

**Notes:**

- The maximum width is the initial width of preview container.
- The maximum height is the initial height of preview container.
- If you set an `aspectRatio` option, be sure to set the same aspect ratio to the preview container.
- If preview is not getting properly displayed, set `overflow: hidden` style to the preview container.

### responsive

- Type: `Boolean`
- Default: `true`

Re-render the cropper when resize the window.

### restore

- Type: `Boolean`
- Default: `true`

Restore the cropped area after resize the window.

### checkCrossOrigin

- Type: `Boolean`
- Default: `true`

Check if the current image is a cross-origin image.

If it is, when clone the image, a `crossOrigin` attribute will be added to the cloned image element and a timestamp will be added to the `src` attribute to reload the source image to avoid browser cache error.

By adding `crossOrigin` attribute to image element will stop adding timestamp to image url and stop reload of image, but the request (XMLHttpRequest) to read the image data for orientation checking will require a timestamp to bust cache to avoid browser cache error now, you can set the `checkOrientation` option to `false` to cancel this request.

If the value of the image's `crossOrigin` attribute is `"use-credentials"`, then the `withCredentials` attribute will set to `true` when read the image data by XMLHttpRequest.

### checkOrientation

- Type: `Boolean`
- Default: `true`

Check the current image's Exif Orientation information.

More exactly, read the Orientation value for rotating or flipping the image, and then override the Orientation value with `1` (the default value) to avoid some issues ([1](https://github.com/fengyuanchen/cropper/issues/120), [2](https://github.com/fengyuanchen/cropper/issues/509)) on iOS devices.

Requires to set both the `rotatable` and `scalable` options to `true` at the same time.

**Note:** Don't trust this all the time as some JPG images have incorrect (not standard) Orientation values.

> Requires [Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) support ([IE 10+](http://caniuse.com/typedarrays)).

### modal

- Type: `Boolean`
- Default: `true`

Show the black modal above the image and under the crop box.

### guides

- Type: `Boolean`
- Default: `true`

Show the dashed lines above the crop box.

### center

- Type: `Boolean`
- Default: `true`

Show the center indicator above the crop box.

### highlight

- Type: `Boolean`
- Default: `true`

Show the white modal above the crop box (highlight the crop box).

### background

- Type: `Boolean`
- Default: `true`

Show the grid background of the container.

### autoCrop

- Type: `Boolean`
- Default: `true`

Enable to crop the image automatically when initialized.

### autoCropArea

- Type: `Number`
- Default: `0.8` (80% of the image)

A number between 0 and 1. Define the automatic cropping area size (percentage).

### movable

- Type: `Boolean`
- Default: `true`

Enable to move the image.

### rotatable

- Type: `Boolean`
- Default: `true`

Enable to rotate the image.

### scalable

- Type: `Boolean`
- Default: `true`

Enable to scale the image.

### zoomable

- Type: `Boolean`
- Default: `true`

Enable to zoom the image.

### zoomOnTouch

- Type: `Boolean`
- Default: `true`

Enable to zoom the image by dragging touch.

### zoomOnWheel

- Type: `Boolean`
- Default: `true`

Enable to zoom the image by wheeling mouse.

### wheelZoomRatio

- Type: `Number`
- Default: `0.1`

Define zoom ratio when zoom the image by wheeling mouse.

### cropBoxMovable

- Type: `Boolean`
- Default: `true`

Enable to move the crop box by dragging.

### cropBoxResizable

- Type: `Boolean`
- Default: `true`

Enable to resize the crop box by dragging.

### toggleDragModeOnDblclick

- Type: `Boolean`
- Default: `true`

Enable to toggle drag mode between "crop" and "move" when click twice on the cropper.

> Requires [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/Events/dblclick) event support.

### minContainerWidth

- Type: `Number`
- Default: `200`

The minimum width of the container.

### minContainerHeight

- Type: `Number`
- Default: `100`

The minimum height of the container.

### minCanvasWidth

- Type: `Number`
- Default: `0`

The minimum width of the canvas (image wrapper).

### minCanvasHeight

- Type: `Number`
- Default: `0`

The minimum height of the canvas (image wrapper).

### minCropBoxWidth

- Type: `Number`
- Default: `0`

The minimum width of the crop box.

**Note:** This size is relative to the page, not the image.

### minCropBoxHeight

- Type: `Number`
- Default: `0`

The minimum height of the crop box.

**Note:** This size is relative to the page, not the image.

### ready

- Type: `Function`
- Default: `null`

A shortcut of the `ready` event.

### cropstart

- Type: `Function`
- Default: `null`

A shortcut of the `cropstart` event.

### cropmove

- Type: `Function`
- Default: `null`

A shortcut of the `cropmove` event.

### cropend

- Type: `Function`
- Default: `null`

A shortcut of the `cropend` event.

### initCrop ( renamed from original cropperjs `crop` )

- Type: `Function`
- Default: `null`

A shortcut of the `crop` event.

### relativeZoom  ( renamed from original cropperjs `zoom` )

- Type: `Function`
- Default: `null`

A shortcut of the `zoom` event.

## Cropperjs Information

See cropperjs [documentation](https://github.com/fengyuanchen/cropperjs#options) for more information and deeper source code.

## License

MIT
