<template>
  <div class="plan">
      <el-row>
          <el-col class="plan-title">
              <h1 class="title-number">123456<span class="level">单元</span></h1>
              <p>所有广告计划>DD-广告测试团队-20171102-4><span>12345</span></p>
              <ul>
                  <li>单元：<span>20171102</span></li>
                  <li>投放周期：2017/7/7-2018/7/7
                      <i class="el-icon-edit"></i>    
                  </li>
                  <li style="width:329px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">
                      定向：男，小学，10-16岁，北京，天津，上海，武汉，贵州，宁夏
                  </li>
                    <li>
                      出价方式：cpc
                  </li>
                  <li>
                    出价：15元<i class="el-icon-edit"></i>  
                  </li>
              </ul>
          </el-col>
          <el-col class="plan-table">
              <h1>广告创意</h1>
              <el-col style="height:64px;" class="plan-form">
                <div>
                   <el-select v-model="value1" placeholder="请选择" style="width:100px;">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <el-input v-model="input" placeholder="请输入内容" style="width:340px;"></el-input>
                </div>
                <div>
                  <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="活动区域">
                      <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit" style="width:120px;">查询</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
              <el-col class="plan-createive">
                <div>
                  <el-button type="primary">+新建创意</el-button>
                  <el-select v-model="value" placeholder="批量操作">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div> 
                  <el-date-picker
                    v-model="date"
                    type="date"
                    placeholder="选择订单日期">
                  </el-date-picker>
                  <el-select v-model="value" placeholder="自定义到">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col>
                 <el-table
                  ref="multipleTable"
                  :data="tableData3"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
                  <el-table-column
                    label="日期"
                    width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
                  </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                  <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
                  <el-button @click="toggleSelection()">取消选择</el-button>
                </div>
              </el-col>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "plan",
  data() {
    return {
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: "",
      input: "",
      date: "",
      formInline: {
        user: "",
        region: ""
      },
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
.title-number {
  font-size: 24px;
  line-height: 31px;
  height: 31px;
  margin-bottom: 16px;
}
.level {
  display: inline-block;
  width: 35px;
  height: 24px;
  background: #6759d6;
  line-height: 24px;
  text-align: center;
  border-radius: 100px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #ffffff;
}
.plan-title p {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.25);
  letter-spacing: -0.09px;
  line-height: 19px;
  margin-bottom: 16px;
}
.plan-title p span {
  color: #151515;
}
.plan-title ul {
  border-top: 1px solid #f5f5f5;
}
.plan-title ul li {
  float: left;
  margin-right: 64px;
  padding: 16px 0;
}
.plan-table {
  margin-top: 32px;
}
.plan-table h1 {
  font-size: 16px;
  color: #000000;
  letter-spacing: -0.1px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.plan-form {
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  height: 64px;
  background: #fafafa;
  align-items: center;
}

.plan-createive {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.el-form {
  height: 100%;
  margin-top: 20px;
  display: flex;
  margin-left: 32px;
}
</style>