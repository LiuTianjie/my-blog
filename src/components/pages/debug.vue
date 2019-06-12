
<template>
	<div>
		<p style="color: #000000;">{{nowTime}}</p>
		<button @click="getTime()">{{nowTime}}</button>
<!-- 	<el-form :model="list" ref="list" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="卡号"
    prop="number"
    :rules="[
      { required: true, message: '卡号不能为空'},
      { type: 'number', message: '卡号必须为数字值'}
    ]"
  >
    <el-input type="age" v-model.number="list.number" autocomplete="off"></el-input>
  </el-form-item>
</el-form> -->
</div>




</template>
<script>
  export default {
    data() {
      return {
        list:{
          number: null
        },
		nowTime:'',
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  check(){
		  if (this.res.data=="") {
		  	alert("插入失败！")
		  }
	  },
	  			getTime(){
				setInterval(()=>{
					//new Date() new一个data对象，当前日期和时间
					//toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
					this.nowTime = new Date().toLocaleString();
				},1000)
			}
		},

			created(){
		this.getTime();
    }

  }
</script>