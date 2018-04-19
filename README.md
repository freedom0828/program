# program
===
##项目描述
-------
    该项目是一个智能业务支持系统。采用vue-cli脚手架,该脚手架是webpack编译环境，其中有一些配置文件，如：
    .babelrc babel配置文件，此文件把我们ES6的代码通过它编译成ES5的。ES6语法提高了项目的健壮性，让代码更易读，避免ES5出现的问题。
    采用vue + element-ui 的框架。Element-Ul是饿了么前端团队推出的一款基于Vue.js 2.0 的PC端UI框架，组件功能丰富，强大，复用性强，只需要注册全局组件，使用时可以批量生成元素，使用率比较高。
    样式采用less，和less-loader进行样式修改。less可以使用变量，简化了冗长的写法，方便调试，在很大程度上节省了时间，less提供了一系列的数学函数，可以在css中运算，可以调用类函数，兼容性强。

##路由搭建
-------
    使用vue-router搭建路由，登录、注册和首页都为一级路由。在首页的一级路由下有创建二级路由，
数据管理: VueX
--------
         Vuex的状态存储是响应式的，当Vue组件从store中读取状态时，若store中状态发生改变，响应的组件也会得到更新状态。但不能直接改变state,必须通过显示的提交(commit)mutations来追踪每一个状态的变化。
        store是配置new VueX.Store时返回的一个实例对象，将store中的state，mutations，actions单独封装成一个文件，易于读写管理。
        在组件中获取store中数据时，引入mapState,mapMutations,mapACtions，在computed中映射，可以在组件中展示store中的数据。
        在存储数据时，在methods中调用this.$store.dispatch(第一个参数是与actions中相对应的函数名，第二个参数是传递的形参)来触发actions中的函数(异步),也可以使用this.$store.commit(第一个参数是与mutations中相对应的函数名，第二个参数是传递的形参)。




