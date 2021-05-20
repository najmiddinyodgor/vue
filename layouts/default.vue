<template>
  <div class="page">
    <SideNav/>
    <Sidebar/>
    <div class="page-content">
      <header>
        <UserNav/>
      </header>
      <main>
        <Nuxt/>
      </main>
    </div>
  </div>
</template>

<script>
import SideNav from "../components/layout/SideNav";
import Sidebar from "../components/layout/Sidebar";
import UserNav from "../components/layout/UserNav";

export default {
  components: {Sidebar, SideNav, UserNav}
}
</script>
