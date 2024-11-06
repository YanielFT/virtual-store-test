export const backendRoutes = {
  products: {
    list: `${import.meta.env.VITE_SPRING_PUBLIC_API_URL}products/`,
    delete: `${import.meta.env.VITE_SPRING_PUBLIC_API_URL}products/:id`,
    create: `${import.meta.env.VITE_SPRING_PUBLIC_API_URL}products/`,
    update: `${import.meta.env.VITE_SPRING_PUBLIC_API_URL}products/`,
    getById: `${import.meta.env.VITE_SPRING_PUBLIC_API_URL}products/:id`,
    search: `${import.meta.env.VITE_SPRING_PUBLIC_API_URL}products/search/:search`,
  },
};
