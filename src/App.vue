<template>
  <div class="app-container">
    <!-- 顶部固定 -->
    <mt-header fixed title="Vue项目"></mt-header>

    <!-- 中间组件 -->


    <!-- 底部tabbar -->
	<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>

    <h1>这是 App 组件</h1>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>
