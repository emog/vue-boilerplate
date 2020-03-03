<template>
  <div>
    <router-link to="/">
      Home
    </router-link>
    |
    <router-link to="/state-management">
      State Management
    </router-link>
    <router-view />
  </div>
</template>
<script>
export default {
    name: 'App',
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: process.env.APP_NAME,
        // all titles will be injected into this template
        titleTemplate: '%s | ' + process.env.APP_NAME
    }
}
</script>
