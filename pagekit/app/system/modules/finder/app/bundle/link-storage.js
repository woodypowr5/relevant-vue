var Finder=function(e){function t(i){if(s[i])return s[i].exports;var o=s[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var s={};return t.m=e,t.c=s,t.p="",t(0)}([function(e,t,s){var i,o;i=s(1),o=s(5),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},function(e,t){"use strict";e.exports={link:{label:"Storage"},props:["link"],data:function(){return _.merge({file:""},$pagekit)},created:function(){this.assets=this.$asset({js:["app/assets/uikit/js/components/upload.min.js","app/system/modules/finder/app/bundle/panel-finder.js"]})},watch:{file:function(e){this.$set("link",e)}},methods:{pick:function(){this.assets.then(function(){this.$refs.modal.open()})},select:function(){this.file=this.$refs.finder.getSelected()[0],this.$refs.finder.removeSelection(),this.$refs.modal.close()},hasSelection:function(){var e=this.$refs.finder.getSelected();return 1===e.length}}},window.Links.components["link-storage"]=e.exports},,,,function(e,t){e.exports=' <div class=uk-form-row> <label for=form-link-file class=uk-form-label>{{ \'File\' | trans }}</label> <div class=uk-form-controls> <div class="pk-form-link uk-width-1-1"> <input id=form-link-file class=uk-width-1-1 type=text v-model=file v-validate:required=isRequired v-el:input lazy> <a class="pk-form-link-toggle pk-link-icon uk-flex-middle" @click.prevent=pick>{{ \'Select\' | trans }} <i class="pk-icon-link pk-icon-hover uk-margin-small-left"></i></a> </div> </div> </div> <v-modal v-ref:modal large> <panel-finder :root=storage v-ref:finder :modal=true></panel-finder> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-link uk-modal-close" type=button>{{ \'Cancel\' | trans }}</button> <button class="uk-button uk-button-primary" type=button :disabled=!hasSelection() @click.prevent=select>{{ \'Select\' | trans }}</button> </div> </v-modal> '}]);