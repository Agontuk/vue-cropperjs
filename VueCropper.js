var Vue = require('vue');
var omit = require('lodash/omit');
var Cropper = require('cropperjs').default;
require('cropperjs/dist/cropper.css');

var CropperComponent = Vue.extend({
    template: `
        <div :style="style">
            <img
                v-el:img
                :src="src"
                :alt="[ alt === undefined ? 'image': alt ]"
                style="max-width: 100%;"
                :style="imgStyle"
            />
        </div>
    `,
    props: {
        'style': Object,
        'data': Object,
        'preview': String,
        'src': {
            type: String,
            required: true
        },
        'alt': String,
        'imgStyle': String,
        'dragMode': String,
        'responsive': Boolean,
        'restore': Boolean,
        'checkCrossOrigin': Boolean,
        'checkOrientation': Boolean,
        'cropBoxMovable': Boolean,
        'cropBoxResizable': Boolean,
        'toggleDragModeOnDblclick': Boolean,
        'modal': Boolean,
        'center': Boolean,
        'highlight': Boolean,
        'zoomOnTouch': Boolean,
        'zoomOnWheel': Boolean,
        'scalable': Boolean,
        'zoomable': Boolean,
        'guides': Boolean,
        'background': Boolean,
        'autoCrop': Boolean,
        'movable': Boolean,
        'rotatable': Boolean,
        'viewMode': Number,
        'aspectRatio': Number,
        'autoCropArea': Number,
        'wheelZoomRatio': Number,

        // Size limitation
        'minCanvasWidth': Number,
        'minCanvasHeight': Number,
        'minCropBoxWidth': Number,
        'minCropBoxHeight': Number,
        'minContainerWidth': Number,
        'minContainerHeight': Number,

        // callbacks
        'ready': Function,
        'cropstart': Function,
        'cropmove': Function,
        'cropend': Function,
        'crop': Function,
        'zoom': Function,
    },
    ready () {
        let data = omit(this.$options.props, ['style', 'src', 'alt', 'imgStyle']);
        let props = {};
        for (let key in data) {
            if (this[key] !== undefined) {
                props[key] = this[key];
            }
        }

        this.cropper = new Cropper(this.$els.img, props);
    },
    methods: {
        reset () {
            return this.cropper.reset();
        },
        clear () {
            return this.cropper.clear();
        },
        replace (url, onlyColorChanged) {
            return this.cropper.replace(url, onlyColorChanged);
        },
        enable () {
            return this.cropper.enable();
        },
        disable () {
            return this.cropper.disable();
        },
        destroy () {
            return this.cropper.destroy();
        },
        move (offsetX, offsetY) {
            return this.cropper.move(offsetX, offsetY);
        },
        moveTo (x, y) {
            return this.cropper.moveTo(x, y);
        },
        zoom (ratio, _originalEvent) {
            return this.cropper.zoom(ratio, _originalEvent);
        },
        zoomTo (ratio, _originalEvent) {
            return this.cropper.zoomTo(ratio, _originalEvent);
        },
        rotate (degree) {
            return this.cropper.rotate(degree);
        },
        rotateTo (degree) {
            return this.cropper.rotateTo(degree);
        },
        scale (scaleX, scaleY) {
            return this.cropper.scale(scaleX, scaleY);
        },
        scaleX (scaleX) {
            return this.cropper.scaleX(scaleX);
        },
        scaleY (scaleY) {
            return this.cropper.scaleY(scaleY);
        },
        getData (rounded) {
            return this.cropper.getData(rounded);
        },
        setData (data) {
            return this.cropper.setData(data);
        },
        getContainerData () {
            return this.cropper.getContainerData();
        },
        getImageData () {
            return this.cropper.getImageData();
        },
        getCanvasData () {
            return this.cropper.getCanvasData();
        },
        setCanvasData (data) {
            return this.cropper.setCanvasData(data);
        },
        getCropBoxData () {
            return this.cropper.getCropBoxData();
        },
        setCropBoxData (data) {
            return this.cropper.setCropBoxData(data);
        },
        getCroppedCanvas (options) {
            return this.cropper.getCroppedCanvas(options);
        },
        setAspectRatio (aspectRatio) {
            return this.cropper.setAspectRatio(aspectRatio);
        },
        setDragMode () {
            return this.cropper.setDragMode();
        }
    }
});

var VueCropper = Vue.component('vue-cropper', CropperComponent);

module.exports = VueCropper;
