import Vue from 'vue';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const CropperComponent = Vue.extend({
    render(h) {
        return h('div', { style: this.containerStyle }, [
            h('img', {
                ref: 'img',
                attrs: {
                    src: this.src,
                    alt: this.alt || 'image',
                    style: 'max-width: 100%'
                },
                style: this.imgStyle
            })
        ]);
    },
    props: {
        'containerStyle': Object,
        'data': Object,
        'preview': String,
        'src': {
            type: String,
            default: ''
        },
        'alt': String,
        'imgStyle': Object,
        'dragMode': String,
        'responsive': {
            type: Boolean,
            default: true
        },
        'restore': {
            type: Boolean,
            default: true
        },
        'checkCrossOrigin': {
            type: Boolean,
            default: true
        },
        'checkOrientation': {
            type: Boolean,
            default: true
        },
        'cropBoxMovable': {
            type: Boolean,
            default: true
        },
        'cropBoxResizable': {
            type: Boolean,
            default: true
        },
        'toggleDragModeOnDblclick': {
            type: Boolean,
            default: true
        },
        'modal': {
            type: Boolean,
            default: true
        },
        'center': {
            type: Boolean,
            default: true
        },
        'highlight': {
            type: Boolean,
            default: true
        },
        'zoomOnTouch': {
            type: Boolean,
            default: true
        },
        'zoomOnWheel': {
            type: Boolean,
            default: true
        },
        'scalable': {
            type: Boolean,
            default: true
        },
        'zoomable': {
            type: Boolean,
            default: true
        },
        'guides': {
            type: Boolean,
            default: true
        },
        'background': {
            type: Boolean,
            default: true
        },
        'autoCrop': {
            type: Boolean,
            default: true
        },
        'movable': {
            type: Boolean,
            default: true
        },
        'rotatable': {
            type: Boolean,
            default: true
        },
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
        'crop': Function
        // 'zoom': Function
    },
    mounted() {
        const { containerStyle, src, alt, imgStyle, ...data } = this.$options.props;
        const props = {};

        for (const key in data) {
            if (this[key] !== undefined) {
                props[key] = this[key];
            }
        }

        this.cropper = new Cropper(this.$refs.img, props);
    },
    methods: {
        reset() {
            return this.cropper.reset();
        },
        clear() {
            return this.cropper.clear();
        },
        replace(url, onlyColorChanged) {
            return this.cropper.replace(url, onlyColorChanged);
        },
        enable() {
            return this.cropper.enable();
        },
        disable() {
            return this.cropper.disable();
        },
        destroy() {
            return this.cropper.destroy();
        },
        move(offsetX, offsetY) {
            return this.cropper.move(offsetX, offsetY);
        },
        moveTo(x, y) {
            return this.cropper.moveTo(x, y);
        },
        zoom(ratio, _originalEvent) {
            return this.cropper.zoom(ratio, _originalEvent);
        },
        zoomTo(ratio, _originalEvent) {
            return this.cropper.zoomTo(ratio, _originalEvent);
        },
        rotate(degree) {
            return this.cropper.rotate(degree);
        },
        rotateTo(degree) {
            return this.cropper.rotateTo(degree);
        },
        scale(scaleX, scaleY) {
            return this.cropper.scale(scaleX, scaleY);
        },
        scaleX(_scaleX) {
            return this.cropper.scaleX(_scaleX);
        },
        scaleY(_scaleY) {
            return this.cropper.scaleY(_scaleY);
        },
        getData(rounded) {
            return this.cropper.getData(rounded);
        },
        setData(data) {
            return this.cropper.setData(data);
        },
        getContainerData() {
            return this.cropper.getContainerData();
        },
        getImageData() {
            return this.cropper.getImageData();
        },
        getCanvasData() {
            return this.cropper.getCanvasData();
        },
        setCanvasData(data) {
            return this.cropper.setCanvasData(data);
        },
        getCropBoxData() {
            return this.cropper.getCropBoxData();
        },
        setCropBoxData(data) {
            return this.cropper.setCropBoxData(data);
        },
        getCroppedCanvas(options) {
            return this.cropper.getCroppedCanvas(options);
        },
        setAspectRatio(aspectRatio) {
            return this.cropper.setAspectRatio(aspectRatio);
        },
        setDragMode(mode) {
            return this.cropper.setDragMode(mode);
        }
    }
});

const VueCropper = Vue.component('vue-cropper', CropperComponent);

export default VueCropper;
