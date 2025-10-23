export function isAuthenticated() {
  return localStorage.getItem('authToken') !== null
}

export function setupAuthGuard(router) {
  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
      next({ name: 'home' })
    } else if (!to.meta.requiresAuth && isAuthenticated() && to.path === '/') {
      next({ name: 'profile' })
    } else {
      next()
    }
  })
}
