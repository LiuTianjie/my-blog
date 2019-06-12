<template>
	<section>
		<div class="new">
			<el-breadcrumb separator=">">

				<el-breadcrumb-item><a href="/#/users">查询页</a></el-breadcrumb-item>
				<el-breadcrumb-item><a href="/#/detail">消费详情</a></el-breadcrumb-item>
				<el-breadcrumb-item><a href="/#/">退出登录</a></el-breadcrumb-item>
			</el-breadcrumb>
			<!-- 新增的界面 -->
			<el-dialog title="出售会员卡" :visible.sync="dialogVisible" width="30%">
				<el-form :v-model="myObj" ref="myObj" label-width="80px" class="demo-ruleForm">
					<el-form-item label="姓名">
						<el-input v-model="name"></el-input>
					</el-form-item>
					<!-- 下拉框选择 -->
					<el-form-item label="性别">
						<el-select v-model="sex" style="width: 100%;" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="年龄">
						<el-input v-model="age"></el-input>
					</el-form-item>
					<el-form :model="form" ref="form" label-width="80px" class="demo-ruleForm">
						<!-- 对输入的卡号进行数字和位数的限定 -->
						<el-form-item prop="card" label="卡号" :rules="[
					{ required: true, message: '卡号不能为空'},
					{ type: 'number', message: '卡号必须为数字值'}
					]">
							<el-input type="age" maxlength="8" v-model.number="form.card" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item prop="psw" label="密码" :rules="[
						{ required: true, message: '密码不能为空'}
						]">
							<el-input type="password" v-model="form.psw" autocomplete="off">
							</el-input>
						</el-form-item>
					</el-form>
					<el-form-item label="余额">
						<el-input v-model.number="money"></el-input>
					</el-form-item>
					<!-- 下拉框选择 -->
					<el-form-item label="类型">
						<el-select v-model="type" style="width: 100%;" placeholder="请选择">
							<el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="折扣">
						<el-input v-model.number="rate"></el-input>
					</el-form-item>
				</el-form>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false;clear();">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false;setValue();clear();">确 定</el-button>
				</span>
			</el-dialog>
			<!-- 更改信息页面 -->
			<el-dialog title="编辑会员" :visible.sync="editVisible" width="30%">
				<el-form v-model=myObj label-width="80px" class="demo-ruleForm">
					<el-form-item label="姓名">
						<el-input v-model="name"></el-input>
					</el-form-item>

					<!-- 下拉框选择 -->
					<el-form-item label="性别">
						<el-select v-model="sex" style="width: 100%;" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="年龄">
						<el-input v-model="age"></el-input>
					</el-form-item>


					<el-form-item label="卡号">
						<el-input :disabled="true" v-model.number="number"></el-input>
					</el-form-item>

					<el-form-item label="余额">
						<el-input :disabled="true" v-model.number="money"></el-input>
					</el-form-item>
					<!-- 下拉框选择 -->
					<el-form-item label="类型">
						<el-select v-model="type" style="width: 100%;" placeholder="请选择">
							<el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="折扣">
						<el-input v-model.number="rate"></el-input>
					</el-form-item>
				</el-form>
				<span slot="footer" class="dialog-footer">
					<el-button size="mini" @click="editVisible = false;clear();">取 消</el-button>
					<el-button size="mini" type="primary" @click="editVisible = false;update();">确 定</el-button>
				</span>
			</el-dialog>
			<!-- 查询和新增工具按钮 -->
			<el-col :span="24" style="padding-bottom: 0px;">

				<el-form :inline="true">
					<el-form-item>
						<el-input v-model="name" placeholder="姓名/卡号"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="getValue">查询</el-button>
						<el-button type="primary" @click="disPlay">全部</el-button>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="dialogVisible = true;clear()">售卡</el-button>
					</el-form-item>

				</el-form>
			</el-col>
			<br>
			<!-- 列表显示界面 -->
			<el-table :data="myObj" style="width: 100%;">

				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="姓名" label="姓名" width="100" sortable>
				</el-table-column>
				<el-table-column prop="性别" label="性别" width="100" sortable>
				</el-table-column>
				<el-table-column prop="年龄" label="年龄" width="100" sortable>
				</el-table-column>
				<el-table-column prop="卡号" label="卡号" min-width="100" sortable>
				</el-table-column>

				<el-table-column prop="余额" label="余额" min-width="100" sortable>
				</el-table-column>

				<el-table-column prop="类型" label="类型" min-width="100" sortable>
				</el-table-column>
				<el-table-column prop="折扣" label="折扣" min-width="100" sortable>
				</el-table-column>

				<el-table-column label="操作" width="400">


					<!-- 编辑、禁用、挂失工具区 -->
					<template scope="scope">
						<el-button size="small" :disabled="ban" @click="editVisible=true;edit(scope.$index)">编辑</el-button>
						<el-button type="danger" :disabled="ban" size="mini" @click="editVisible = false;bancard();">退卡</el-button>
						<el-button type="danger" :disabled="ban&&ban1" size="mini" @click="editVisible = false;loss()">{{los}}</el-button>
						<el-button type="warning" :disabled="ban" size="small" @click="edit(scope.$index);spend();">消费</el-button>
						<el-button type="success" :disabled="ban" size="small" @click="edit(scope.$index);charge();">充值</el-button>

					</template>

				</el-table-column>
			</el-table>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'users',
		data() {
			return {
				time: '',
				los: '挂失',
				ban: false,
				ban1: false,
				form: {
					card: null,
					psw: null,
				},
				// index:0,
				edit_index: null,
				options: [{
					value: '男',
					label: '男'
				}, {
					value: '女',
					label: '女'
				}, ],
				options1: [{
						value1: '普通用户',
						label: '普通用户'
					}, {
						value1: '普通会员',
						label: '普通会员'
					},
					{
						value1: '储值会员',
						label: '储值会员'
					},
				],
				editVisible: false,
				dialogVisible: false,
				name: null,
				sex: null,
				age: null,
				number: null,
				money: null,
				type: null,
				rate: null,
				amount:null,
				key: null,
				users: [],
				retu: [], //临时
				// isdisabled: false,

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
			// 展示所有信息
			disPlay() {
				// axios.get('/', {params: ''})
				this.$http.get('/api/disPlay', {
					params: {
						number: this.number,
						name: this.name,
					}
				}).then((res) => {
					console.log('res', res);
					this.retu = res.data;
				})
			},
			//查询
			getValue() {
				// axios.get('/', {params: ''})
				this.$http.get('/api/getValue', {
					params: {
						number: this.number,
						name: this.name,
					}
				}).then((res) => {
					console.log('res', res);
					this.retu = res.data;
				})
			},
			// 售卡/插入操作
			setValue() {

				// axios.post('/', {})
				this.$http.post('/api/setValue', {
					name: this.name,
					sex: this.sex,
					age: this.age,
					number: this.form.card,
					money: this.money,
					type: this.type,
					rate: this.rate,
				}).then((res) => {
					console.log('res', res);
					if (res.headers["content-length"] == 0) {
						this.$notify({
							title: '售卡',
							message: '未售出,可能是参数错误！',
							type: 'error'
						});

					} else {
						this.$notify({
							title: '售卡',
							message: '售出会员卡！',
							type: 'success'
						});

					};
					this.disPlay()

				})

			},
			// 更新操作
			update() {
				this.$http.post('/api/update', {
					name: this.name,
					sex: this.sex,
					age: this.age,
					number: this.number,
					money: this.money,
					type: this.type,
					rate: this.rate,
				}).then((res) => {
					console.log(name);
					console.log('res', res);
					this.retu = res.data;
					// alert("修改成功！");
					this.getValue();
				})

			},
			// 每次操作后清空数据
			clear() {

				this.name = null;
				this.sex = null;
				this.age = null;
				this.number = null;
				this.money = null;
				this.type = null;
				this.rate = null;
			},
			// 编辑信息
			edit(a) {

				this.name = this.retu[a]["姓名"],
					this.sex = this.retu[a]["性别"],
					this.age = this.retu[a]["年龄"],
					this.number = this.retu[a]["卡号"],
					this.money = this.retu[a]["余额"],
					this.type = this.retu[a]["类型"]
			},
			//禁用/退卡
			bancard() {

				this.$confirm('此操作将永久禁用此会员卡, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$notify({
						title: '禁用',
						message: '已禁用该会员卡！',
						type: 'success'
					});
					this.ban = true;
					this.ban1 = true;
				}).catch(() => {
					this.$notify({
						title: '禁用',
						message: '已取消禁用操作！',
						type: 'info'
					});
				});

			},
			// 挂失
			loss() {
				if (this.ban == false) {
					this.$confirm('是否挂失该会员卡?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.$notify({
							title: '挂失',
							message: '已挂失该会员卡！',
							type: 'success'
						});
						this.los = '解挂'
						this.ban = !this.ban;
					}).catch(() => {
						this.$notify({
							title: '挂失',
							message: '取消挂失操作！',
							type: 'info'
						});
					});
				} else {
					this.$confirm('是否解挂该会员卡?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.$notify({
							title: '解挂',
							message: '已解除该卡的挂失！',
							type: 'success'
						});
						this.los = '挂失'
						this.ban = !this.ban;
					}).catch(() => {
						this.$notify({
							title: '解挂',
							message: '取消解挂操作！',
							type: 'info'
						});
					});
				}

			},
			// 消费
			spend() {
				this.$prompt('请输入消费金额，您当前余额为' + this.money + '元', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',

				}).then(({
					value
				}) => {
					this.amount=value;
					
					if (value > this.money) {
						this.$notify({
							title: '消费',
							message: '您没有足够的钱！',
							type: 'error'
						});

					} else {
						this.$notify({
							title: '消费',
							message: '成功消费:' + value + '元，' + '余额为：' + (this.money - value) + '元！',
							type: 'success'
						});
						this.money = this.money - value;
						this.inSpend()
						this.update();
					}
				}).catch(() => {
					this.$notify({
						title: '消费',
						message: '取消消费！',
						type: 'info'
					});
				});
				
			},
			// 充值
			charge() {
				this.$prompt('请输入充值金额，您当前余额为' + this.money + '元', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',

				}).then(({
					value
				}) => {
					this.amount=value;
					this.$notify({
						title: '充值',
						message: '成功充值:' + value + '元，' + '余额为：' + (this.money + parseInt(value)) + '元！',
						type: 'success'
					});
					this.money = this.money + parseInt(value);
					this.inCharge();
					this.update();

				}).catch(() => {

					this.$notify({
						title: '充值',
						message: '取消充值！',
						type: 'info'
					});
				});
			},
			inSpend() {

				this.getTime();
				this.$http.post('/api/spend', {
					number: this.number,
					amount: this.amount,
					money: this.money,
					time: this.time,
				}).then((res) => {
					console.log('res', res);


				})
			},
			inCharge() {
		
				this.getTime();
				this.$http.post('/api/charge', {
					number: this.number,
					amount: this.amount,
					money: this.money,
					time: this.time,
				}).then((res) => {
	
					console.log('res', res);
					this.disPlay()

				})
			},

			getTime() {
				setInterval(() => {
					//new Date() new一个data对象，当前日期和时间
					//toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果
					this.time = new Date().toLocaleString();
				}, 1000)
				
			},
		},


		mounted() {
			this.disPlay();
			this.getTime()
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
