package com.store.web.app.services;

import java.util.List;

import com.store.web.app.models.entity.Product;

public interface IProductService {
    public List<Product> getAllProducts();
    public Product getProductById(Long id);
    public Product updateProduct(Long id, Product product);
    public Product createProduct(Product product) throws Exception;
    public List<Product> deleteProduct(Long id) throws Exception;
}
