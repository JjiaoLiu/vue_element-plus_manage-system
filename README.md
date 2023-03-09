### 开发注意事项
1.el-form 的 modal 和 ref 属性不能设置一致 ts强校验数据类型不同
```
<el-form :model="form" :rules="rules" :inline="false">
   <el-form-item prop="name">
         <el-input v-model="form.name"></el-input>
   </el-form-item>
   <el-form-item prop="password">
         <el-input v-model="form.password"></el-input>
   </el-form-item>
   <el-form-item>
         <el-button class=" w-full" type="primary" @click="submitForm">登录</el-button>
   </el-form-item>
</el-form>
```