<template>
  <div class="main-router">
    <el-row>
      <el-col :span='24'>
        <div>
          <el-row :gutter="12" style="margin-bottom:24px;">
            <el-col :span="6">
              <el-card shadow="always" style="height:80.25px;">
                总是显示
              </el-card>
            </el-col>
             <el-col :span="6">
              <el-card shadow="always" style="height:80.25px;">
                总是显示
              </el-card>
            </el-col>
             <el-col :span="8">
              
            </el-col>
          </el-row>
          <el-row class="main-title" > 
            <el-col :span="6" style="line-height: 40px;">整体情况</el-col>
            <el-col :span="18" class="main-timer">
              <span @click='changeEcharts'>近7天</span>
              <span>近30天</span>
              <div class="block">
                <el-date-picker
                  v-model="start"
                  type="month"
                  placeholder="选择月">
                </el-date-picker>
              </div>
              <div class="block">
                <el-date-picker
                  v-model="end"
                  type="month"
                  placeholder="选择月">
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="24" style="margin:24px 0">
            <el-col :span="6">
              <el-card shadow="always" class="main-cart">
                总是显示
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="always" class="main-cart">
                总是显示
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="always" class="main-cart">
                总是显示
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="always" class="main-cart">
                总是显示
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in selectData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-row>
          <el-row>
            <div class="echarts_img" style="height:300px;width:100%;">
            </div>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
import Echarts, { init } from "echarts";
export default {
  name: "index",
  data() {
    return {
      value: "",
      start:'',
      end:'',
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          boundaryGap:false
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      },
      selectData: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      graph: null
    };
  },
  watch:{
    start (n,o) {
      this.start = this.format(n)
    },
    end ( n,o) {
      this.end = this.format(n)
    }
  },
  methods:{
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
    },
    changeEcharts(){
      const that = this;
      this.$http.post('/dsp-report/index').then((res)=>{
        that.option = {
          xAxis: {
            type: "category",
            data: that.getDateArea(that.start,that.end),
            boundaryGap:false
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: res.data.dataY1,
              type: "line"
            }
          ]
        }
        that.graph.setOption(that.option)
      })
    }
  },
  created(){
    
  },
  mounted(){
    this.graph = init(document.querySelector('.echarts_img'))
    this.graph.setOption(this.option);
    const that = this;
    //让echarts一进来就加载一步
    window.onresize = () => {
      that.graph.resize()
    }
  }
};
</script>

<style>
.main-title {
  height: 60px;
  
  border-bottom: 1px solid #eee;
}
.main-timer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.main-timer span {
  margin-right: 32px;
}
.timer {
  float: right;
}
.main-cart {
  height: 80.25px;
}
</style>