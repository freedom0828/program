# program

项目描述
-------
    该项目是一个智能业务支持系统。采用vue-cli脚手架,该脚手架是webpack编译环境,使用ES6语法提高了项目的健壮性，让代码更易读，避免ES5出现的问题。
    采用vue + element-ui 的框架。Element-Ul是饿了么前端团队推出的一款基于Vue.js 2.0 的PC端UI框架，组件功能丰富、<br/>强大，复用性强，只需要注册全局组件，使用时可以批量生成元素，使用率比较高。
    样式采用less，和less-loader进行样式修改。less可以使用变量，简化了冗长的写法，方便调试，在很大程度上节省了时间，less提供了一系列的数学函数，可以在css中运算，可以调用类函数，兼容性强。

路由搭建
-------
    使用vue-router搭建路由，登录、注册和首页都为一级路由。在首页的一级路由下有创建二级路由，是页面中的导航的跳转路径。
    vue-cli已经配置好了路由，只需将配置的信息写在实例对象中。
    
数据管理: VueX
--------
     Vuex的状态存储是响应式的，当Vue组件从store中读取状态时，若store中状态发生改变，响应的组件也会得到更新状态。但不能直接改变state,必须通过显示的提交(commit)mutations来追踪每一个状态的变化。
    store是配置new VueX.Store时返回的一个实例对象，将store中的state，mutations，actions单独封装成一个文件，易于读写管理。
    在组件中获取store中数据时，引入mapState,mapMutations,mapACtions，在computed中映射，可以在组件中展示store中的数据。
    在存储数据时，在methods中调用this.$store.dispatch(第一个参数是与actions中相对应的函数名，第二个参数是传递的形参)来触发actions中的函数(异步),也可以使用this.$store.commit(第一个参数是与mutations中相对应的函数名，第二个参数是传递的形参)。


数据请求:
-----
    在数据请求时我们采用axios，由于后台管理系统安全性要求比较高，在获取数据设有请求拦截和响应拦截。而且在获取数据时，后台需要验证传递的参数是否有token字段，没有token字段会直接跳转登录页。

    添加请求拦截器
    axios.interceptors.request.use(function (config) {
        在发送请求之前做些什么
        return config;
      }, function (error) {
        对请求错误做些什么
        return Promise.reject(error);
      });

    添加响应拦截器
    axios.interceptors.response.use(function (response) {
         对响应数据做点什么
        return response;
      }, function (error) {
         对响应错误做点什么
        return Promise.reject(error);
      });


项目中核心功能和难点：
--------
    在登录注册页面，在登录时会进去input验证，验证输入的格式是否做正确，我们用到了element-ui中的input组件，在这个组件中有rules属性可以分别为不同的输入框进行格式验证。在验证成功后，点击登录按钮会请求后台查看数据库是否有同样的用户名存在，如果存在，后台服务器会返回一个加密的token字段，这个加密的token也会设置一个有效期。当返回的信息中有token字段和登录的有户名时，需要存入本地存储中，否则跳转注册页面。如果token失效，再跳转页面时会跳转登录页。

    当页面中要向后台请求数据时，后台会先进行token解密，判断token中的username是否和登录名相同，判断成功才进行下一步操作。

    在新建创意时，有用到上传图片。我们采用了multer（node的第三方包）进行操作。

遇到的困难及解决方式：
----
    在首页中选择月份区间时，使用element-ui组件时，不能选到月份。
        我们采用了element-UI中选择月的组件，可以获取到月份，封装了一个方法格式化日期.在点击近7天时，触发一个可以获取区间中所以月份的函数，通过请求后台接口获取参数，生成了Echarts图表。
        
    //格式化日期
    format(date){
      let day = new Date(date);
      let month = "" + (day.getMonth() + 1);
      let year = day.getFullYear();
      if(month.length < 2) month = "0" + month;
      return [year, month].join('/');
    },
    //获取全部的月份
    getDateArea(start,end){
      let [startYear,startMonth] = start.split('/');
      let [endYear,endMonth] = end.split('/')
      let arr = [];
      while(startYear <= endYear) {
        if(startYear == endYear) {
          for(let i=1;i<= endMonth;i++) {
            arr.push(`${startYear} /${i}`)
          }
        }else if(startYear <= endYear) {
          for(let i=startMonth;i<=12;i++){
            arr.push(`${startYear}/${i}`)
          }
        }
        startYear = Number(startYear) + 1
      }
      return arr;
    }
    
    
        在新建创意时，添加创意的按钮每点击一次都需要生成一个tab切换页，element-ui中tab标签页时需要将添加创意的按钮定位到tab切换行的后面，不能够很好  的满足需求，所以我们我们模仿element-ui封装了tab切换组件。<br/>
    
    在上传图片时，用到了multer，在vue文件中，因为少写一个字段导致图片上传不成功。
        在使用form表单上传图片时，form表单需要写enctype="multipart/form-data" 在input元素上需要写name="file"

打包上线
----
 
