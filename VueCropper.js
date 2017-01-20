'use strict';

var Vue = require('vue');
var omit = require('lodash.omit');
var Cropper = require('cropperjs').default;
require('cropperjs/dist/cropper.css');

var CropperComponent = Vue.extend({
    render: function render(h) {
        return h('div', { style: this.style }, [
            h('img', {
                ref: 'img',
                attrs: {
                    src: this.src,
                    alt: this.alt || 'image',
                    style: { 'max-width': '100%' }
                },
                style: this.imgStyle
            })
        ]);
    },
    props: {
        'style': Object,
        'data': Object,
        'preview': String,
        'src': {
            type: String,
            default: ''
        },
        'alt': String,
        'imgStyle': String,
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
    mounted: function mounted() {
        var data = omit(this.$options.props, ['style', 'src', 'alt', 'imgStyle']);
        var props = {};
        for (var key in data) {
            if (this[key] !== undefined) {
                props[key] = this[key];
            }
        }

        this.cropper = new Cropper(this.$refs.img, props);
    },
    methods: {
        reset: function reset() {
            return this.cropper.reset();
        },
        clear: function clear() {
            return this.cropper.clear();
        },
        replace: function replace(url, onlyColorChanged) {
            return this.cropper.replace(url, onlyColorChanged);
        },
        enable: function enable() {
            return this.cropper.enable();
        },
        disable: function disable() {
            return this.cropper.disable();
        },
        destroy: function destroy() {
            return this.cropper.destroy();
        },
        move: function move(offsetX, offsetY) {
            return this.cropper.move(offsetX, offsetY);
        },
        moveTo: function moveTo(x, y) {
            return this.cropper.moveTo(x, y);
        },
        zoom: function zoom(ratio, _originalEvent) {
            return this.cropper.zoom(ratio, _originalEvent);
        },
        zoomTo: function zoomTo(ratio, _originalEvent) {
            return this.cropper.zoomTo(ratio, _originalEvent);
        },
        rotate: function rotate(degree) {
            return this.cropper.rotate(degree);
        },
        rotateTo: function rotateTo(degree) {
            return this.cropper.rotateTo(degree);
        },
        scale: function scale(scaleX, scaleY) {
            return this.cropper.scale(scaleX, scaleY);
        },
        scaleX: function scaleX(_scaleX) {
            return this.cropper.scaleX(_scaleX);
        },
        scaleY: function scaleY(_scaleY) {
            return this.cropper.scaleY(_scaleY);
        },
        getData: function getData(rounded) {
            return this.cropper.getData(rounded);
        },
        setData: function setData(data) {
            return this.cropper.setData(data);
        },
        getContainerData: function getContainerData() {
            return this.cropper.getContainerData();
        },
        getImageData: function getImageData() {
            return this.cropper.getImageData();
        },
        getCanvasData: function getCanvasData() {
            return this.cropper.getCanvasData();
        },
        setCanvasData: function setCanvasData(data) {
            return this.cropper.setCanvasData(data);
        },
        getCropBoxData: function getCropBoxData() {
            return this.cropper.getCropBoxData();
        },
        setCropBoxData: function setCropBoxData(data) {
            return this.cropper.setCropBoxData(data);
        },
        getCroppedCanvas: function getCroppedCanvas(options) {
            return this.cropper.getCroppedCanvas(options);
        },
        setAspectRatio: function setAspectRatio(aspectRatio) {
            return this.cropper.setAspectRatio(aspectRatio);
        },
        setDragMode: function setDragMode() {
            return this.cropper.setDragMode();
        }
    }
});

var VueCropper = Vue.component('vue-cropper', CropperComponent);

module.exports = VueCropper;
