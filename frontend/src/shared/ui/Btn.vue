<template>
    <div @click="handleLoader">
        <div v-if="showBtn" class="ui-btn" @click="$emit('handleButton')">
        {{ text }}
    </div>
    <div v-if="showLoader" class=" ui-btn__loader ">
        <Loader/>
    </div>
    </div>
</template>

<script>

import Loader from '@/shared/ui/Loader.vue';

export default {
    name: 'uiBtn',
    components : {
        Loader,
    },
    data() {
        return {
            showBtn:true,
            showLoader:false
        };
    },
    methods: {
        handleLoader() {
            this.showBtn=!this.showBtn,
            this.showLoader=!this.showLoader
        },
    },
    props: {
        text: {
            type: String,
            default: '',
        },
        width: {
            type: String,
            default: 'fit-content',
        },
        mw: {
            type: String,
            default: '0',
        },
        fs: {
            type: String,
            default: '18px',
        },
        color: {
            type: String,
            default: '#fff',
        },
        background: {
            type: String,
            default: '#000',
        },
        hb: {
            type: String,
            default: '#0d0d9e',
        },
        padding: {
            type: String,
            default: '10px 20px',
        },
        br: {
            type: String,
            default: '10px',
        },
        border: {
            type: String,
            default: 'none',
        }
    }
}
</script>

<style lang="scss">
    .ui-btn  {
        /* width: v-bind(width);  */
        min-width: /* v-bind(mw); */ 107px;
        font-size: v-bind(fs);
        color: v-bind(color);
        background: v-bind(background);
        padding: v-bind(padding);
        border-radius: v-bind(br);
        border: v-bind(border);
        user-select: none;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        transition: all .3s ease-in;

        &:hover {
            background: v-bind(hb);
            color: v-bind(background);
            transition: all .3s ease-in;
        }
        &__loader {
            min-width: 107px;
            max-height: 34.5px;
            border: 2px solid #0d0d9e;
            border-radius: 10px;
            padding: 5px 20px ;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
    }
</style>