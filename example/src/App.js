import VueCropper from 'vue-cropperjs';

const App = {
    name: 'App',
    data () {
        return {
            imgSrc: require('./assets/images/image.jpg'),
            cropImg: ''
        };
    },
    methods: {
        change () {
            this.imgSrc = require('./assets/images/image1.jpg');

            // rebuild cropperjs with the updated source
            this.$refs.cropper.replace(require('./assets/images/image1.jpg'));
        },
        cropImage () {
            // get image data for post processing, e.g. upload or setting image src
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        },
        rotate () {
            // guess what this does :)
            this.$refs.cropper.rotate(90);
        }
    },
    // assign ref property to access the underlying functions
    // all cropperjs options should be in kebab-case instead of camelCase
    // see http://vuejs.org/guide/components.html#camelCase-vs-kebab-case
    render(h) {
        return (
            <div id="app">
                <div style="max-width: 900px; display: inline-block;">
                    <vue-cropper
                        ref='cropper'
                        guides={true}
                        view-mode={2}
                        drag-mode="crop"
                        auto-crop-area={0.5}
                        min-container-width={250}
                        min-container-height={180}
                        background={true}
                        rotatable={true}
                        src={this.imgSrc}
                        imgStyle={{ 'height': '300px' }}
                        cropmove={this.cropImage}>
                    </vue-cropper>
                </div>
                <img
                    src={this.cropImg}
                    style="width: 200px; height: 150px; border: 1px solid gray"
                    alt="Cropped Image"
                />
                <br />
                <button on-click={this.rotate}>Rotate</button>
                <button on-click={this.change}>Change Image</button>
            </div>
        );
    }
};

export default App;
