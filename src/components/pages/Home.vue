<template>
	<div class="login-wrap">
		<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
			<h3 class="title">健身房会员管理系统</h3>
			<el-form-item prop="account">
				<el-input type="text"  v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
			</el-form-item>
			<el-form-item prop="checkPass">
				<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
			</el-form-item>
			<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
			<el-form-item style="width:100%;">
				<el-button type="primary" @click="login()" style="width:100%;" :loading="logining">登录</el-button>
				<!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->

			</el-form-item>
			<p class="login-tips">设计人：刘涛 </p>
			<p class="login-tips">班级：2016级信息安全2班 </p>
			<p class="login-tips">学号：20161681310079 </p>
		</el-form>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				logining: false,
				ruleForm2: {
					account: '',
					checkPass: ''
				},
				rules2: {
					account: [{
							required: true,
							message: '请输入账号',
							trigger: 'blur'
						},
						//{ validator: validaePass }
					],
					checkPass: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						//{ validator: validaePass2 }
					]
				},
				checked: true
			};
		},
		methods: {
			login() {
				
				if (this.ruleForm2.account == '刘涛' && this.ruleForm2.checkPass == '123456') {
					this.$router.push({
						path: '/users'
					});				
						
					this.$message({
						type: 'success',
						message: '登录成功！'
					});
					
				} else {
					this.$message({
						type: 'error',
						message: '账号或密码错误！'
					});
				}
			}

		}
	}
</script>

<style scoped>
	.login-wrap {
		position: fixed;
		width: 100%;
		height: 100%;
		background-image: url(../../assets/login-bg1.jpg);
		background-size: 100%;

	}

	.login-tips {
		font-size: 16px;
		line-height: 16px;
		color: #ffffff;
		font-family: helvetica;
		text-align: center;
		font-weight: 800;
	}

	.login-container {
		/*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
		position: absolute;
		left: 50%;
		top: 40%;
		width: 350px;
		margin: -175px 0 0 -202px;
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.25);
		overflow: hidden;
		padding: 30px 30px 15px 30px;
		


		.title {
			margin: 0px auto 40px auto;
			text-align: center;
			color: #ffffff;
		}

	}

	.remember {
		margin: 0px 0px 20px 0px;
		color: #000000;
		left: -38%;
	}
</style>
