<template>
  <div><div :class="affixCls" :style="affixStyle"><slot></slot></div></div>
</template>
<script>

const prefix = 'h-affix';

export default {
  name: 'Affix',
  props: {
    offsetTop: Number,
    offsetBottom: Number,
    container: Function,
    // parentOffsetTop: Number,
    // parentOffsetBottom: Number,
  },
  data() {
    return {
      fixedOffsetTop: this.offsetTop,
      fixedOffsetBottom: this.offsetBottom,
      scrollEvent: null,
      isFixed: false,
      fixPosition: 'top',
      containerDom: null,
      isAbsolute: this.container ? true : false,
      y: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      if(this.container) {
        this.containerDom = this.container.call();
      }
      this.scrollEvent = window.addEventListener("scroll", this.trigger, true);
      this.scrollEvent = window.addEventListener("resize", this.trigger, false);
      var evObj = document.createEvent('HTMLEvents');
      evObj.initEvent( 'scroll', true, true );
      document.body.dispatchEvent(evObj);
    })
  },
  beforeDestroy() {
    if (this.scrollEvent) {
      document.body.removeEventListener('scroll', this.trigger);
      window.removeEventListener('resize', this.trigger);
    }
  },
  methods: {
    refresh() {
      this.trigger({});
    },
    trigger(event) {
      let el = this.$el.firstChild;
      if(event.target == el) return false;
      let original = this.isFixed;
      if(this.containerDom) {
        // let offsetTop = this.offsetTop || 0;
        // let offsetBottom = this.offsetBottom || 0;
        let fixedOffsetTop = this.fixedOffsetTop = (window.innerHeight - el.clientHeight) / 2;
        let fixedOffsetBottom = this.fixedOffsetBottom = (window.innerHeight - el.clientHeight) / 2;
        let parentOffsetTop = this.offsetTop || 0;
        let parentOffsetBottom = this.offsetBottom || 0;
        let position = el.getBoundingClientRect();
        let containerPosition = this.containerDom.getBoundingClientRect();
        let dis = containerPosition.top - this.y;
        this.y = containerPosition.top;
        // log('===========new===========')
        // log('dis', dis);
        // log('top isAbsolute', dis > 0 && position.top - containerPosition.top < parentOffsetTop)
        // log('bottom isAbsolute', dis < 0 && containerPosition.bottom - position.bottom < parentOffsetBottom)
        // log('top isFixed', ( dis < 0 && position.top < fixedOffsetTop && containerPosition.bottom > (fixedOffsetTop + el.clientHeight + parentOffsetBottom)));
        // log('bottom isFixed', ( dis > 0 && window.innerHeight - position.bottom < fixedOffsetBottom && containerPosition.top < (fixedOffsetTop - parentOffsetTop)))
        
        if ( dis >= 0 && position.top - containerPosition.top < parentOffsetTop) {
          this.isFixed = false;
          this.isAbsolute = true;
          this.fixPosition = 'top';
        } else if ( dis < 0 && containerPosition.bottom - position.bottom < parentOffsetBottom) {
          this.isFixed = false;
          this.isAbsolute = true;
          this.fixPosition = 'bottom';
        } else if (this.isAbsolute && 
            (( dis < 0 && position.top < fixedOffsetTop && containerPosition.bottom > (fixedOffsetTop + el.clientHeight + parentOffsetBottom))
            || (dis > 0 && window.innerHeight - position.bottom < fixedOffsetBottom && containerPosition.top < (fixedOffsetTop - parentOffsetTop)))) {
          this.isFixed = true;
          this.isAbsolute = false;
          this.fixPosition = 'top';
        }
        
        if (original != this.isFixed) {
          this.$emit('onchange', this.isFixed);
          this.$emit('change', this.isFixed);
        }
      } else {
        if (!this.isFixed) {
          let position = el.getBoundingClientRect();
          if (this.offsetTop !== undefined) {
            if (position.top < this.offsetTop) {
              this.isFixed = true;
              this.fixPosition = 'top';
            }
          }
          if (!this.isFixed && this.offsetBottom != undefined) {
            if (window.innerHeight < (position.top + el.clientHeight + this.offsetBottom)) {
              this.isFixed = true;
              this.fixPosition = 'bottom';
            }
          }
        } else if (el.parentNode) {
          let position = el.parentNode.getBoundingClientRect();
          if (this.offsetTop !== undefined) {
            if (this.fixPosition == 'top' && position.top > this.offsetTop) {
              this.isFixed = false;
            }
          }
          if (this.isFixed && this.offsetBottom != undefined) {
            if (this.fixPosition == 'bottom' && window.innerHeight > (position.top + el.clientHeight + this.offsetBottom)) {
              this.isFixed = false;
            }
          }
        }

        if (original != this.isFixed) {
          this.$emit('onchange', this.isFixed);
          this.$emit('change', this.isFixed);
        }
      }
    },
  },
  computed: {
    affixCls() {
      return {
        [prefix]: this.isFixed,
        [`${prefix}-absolute`]: this.isAbsolute
      }
    },
    affixStyle() {
      let param = {};
      if (this.isFixed) {
        if (this.fixPosition == 'top') {
          param.top = `${this.fixedOffsetTop}px`;
        } else {
          param.bottom = `${this.fixedOffsetBottom}px`;
        }
      }

      if(this.isAbsolute) {
        if (this.fixPosition == 'top') {
          param.top = `${this.offsetTop}px`;
        } else {
          param.bottom = `${this.offsetBottom}px`;
        }
      }
      return param;
    }
  }
};
</script>
