package com.store.web.app.services;

import java.util.List;

import com.store.web.app.models.entity.DigitalProduct;
import com.store.web.app.models.entity.PhysicalProduct;
import com.store.web.app.models.entity.Product;

public interface IProductService {
    public List<Product> getAllProducts();

    public Product getProductById(Long id);

    public Product updateDigitalProduct(Long id, DigitalProduct product) throws Exception;

    public Product updatePhysicalProduct(Long id, PhysicalProduct product) throws Exception;

    public List<Product> createPhysicalProduct(PhysicalProduct product) throws Exception;

    public List<Product> createDigitalProduct(DigitalProduct product) throws Exception;

    public List<Product> deleteProduct(Long id) throws Exception;
    
    public List<Product> findByCodeOrName(String id);
}
