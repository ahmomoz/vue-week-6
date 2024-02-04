<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/admin" class="navbar-brand">後台首頁</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active">返回前台首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">後台產品列表</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/order" class="nav-link">後台訂單列表</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
