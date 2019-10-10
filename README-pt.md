# vue-cropperjs

Um componente em Vue para [cropperjs](https://github.com/fengyuanchen/cropperjs).

[![NPM](https://nodei.co/npm/vue-cropperjs.png?downloads=true)](https://nodei.co/npm/vue-cropperjs/)


## Demonstração

Visualize já **[agontuk.github.io/vue-cropperjs](https://agontuk.github.io/vue-cropperjs/)**

## Instalação

```shell
npm install --save vue-cropperjs
```

Vue v1.x :

```shell
npm install --save vue-cropperjs@1.0.3
```

> Você também precisará do css & style loader para webpack

## Como usar:

```jsx
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
```
```html
<!--Template-->
<vue-cropper
  ref="cropper"
  :src="imgSrc"
  alt="Source Image"
  :cropmove="cropImage"
>
</vue-cropper>
```

```js
// VM do Vue
this.$refs.cropper.rotate(45);
```

Veja o [exemplo](https://github.com/Agontuk/vue-cropperjs/tree/master/example) de arquivos e documentação do [cropperjs](https://github.com/fengyuanchen/cropperjs#cropperjs)

## Opções

| Nome           | Tipo     | Obrigatório | Descrição                     |
| -------------- | -------- | -------- | ------------------------------- |
| src            | `string` | --       | Fonte da imagem                   |
| containerStyle | `object` | --       | Estilo para o contêiner de imagem |
| imgStyle       | `object` | --       | Estilo para a imagem           |
| alt            | `string` | --       | Texto alternativo para a imagem    |

## Opções relacionadas ao Cropperjs


Consulte a [documentação](https://github.com/fengyuanchen/cropperjs#options) do cropperjs para todas as opções e métodos possíveis.

### Métodos renomeados

- `relativeZoom` para `zoom`
- `initCrop` para `crop`

## Licença

MIT
