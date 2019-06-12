<template>
	<section>

		<div class="new">
			<el-breadcrumb separator=">">

				<el-breadcrumb-item><a href="/#/users">查询页</a></el-breadcrumb-item>
				<el-breadcrumb-item><a href="/#/detail">消费详情</a></el-breadcrumb-item>
				<el-breadcrumb-item><a href="/#/">退出登录</a></el-breadcrumb-item>
			</el-breadcrumb>
			<div style="width: 100%;margin-top: 30px;"></div>
			<el-form :inline="true">
				<el-form-item >
					<el-input v-model="number" maxlength="8" placeholder="卡号"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="checknum()">查询</el-button>
					<el-button type="primary" @click="rdisplay()">全部</el-button>
				</el-form-item>


			</el-form>

			<el-table :data="myObj" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="卡号" label="卡号" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="消费" label="消费" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="存入" label="存入" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="余额" label="余额" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="日期" label="日期" min-width="100" sortable>
				</el-table-column>

			</el-table>
		</div>
	</section>

</template>

<script>
	export default {
		name: 'detail',
		data() {
			return {
				number: null,
				retu: [],
			}
		},
		computed: {
			myObj: {
				get: function() {
					return this.retu; // 在这里把临时对象的值通过计算属性赋值给页面中用到的对象
				}
			},
		},
		methods: {
			rdisplay() {
				this.$http.get('/api/rdisplay', {}).then((res) => {
					console.log('res', res);
					this.retu = res.data;
					this.number=null;
				})
			},
			checknum() {
				this.$http.get('/api/checknum', {
					params:{number: this.number,}
				}).then((res) => {
					console.log('res', res);
					this.retu = res.data;
					
				})
			}

		},
		mounted() {
			this.rdisplay()
		},
	}
</script>
<style scoped>
	.new {
		color: #000000;
		margin: 10px;
		padding: 50px;
	}
</style>
