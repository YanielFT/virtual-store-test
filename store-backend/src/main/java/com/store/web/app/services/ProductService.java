package com.store.web.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.web.app.models.entity.DigitalProduct;
import com.store.web.app.models.entity.PhysicalProduct;
import com.store.web.app.models.entity.Product;
import com.store.web.app.models.repository.ProductDao;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService implements IProductService {

    @Autowired
    private ProductDao productDao;

    @Override
    public List<Product> getAllProducts() {
        return productDao.findAll().stream().map(product -> {
            if (product instanceof DigitalProduct) {
                product.setType("digital");
            } else if (product instanceof PhysicalProduct) {
                product.setType("physical");
            }
            return product;
        }).collect(Collectors.toList());
    }

    @Override
    public Product getProductById(Long id) {
        return productDao.findById(id).orElse(null);
    }

    @Override
    public Product createProduct(Product product) {
        return productDao.save(product);
    }

    @Override
    public List<Product> deleteProduct(Long id) {
        productDao.deleteById(id);
        return productDao.findAll();
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = productDao.findById(id).orElse(null);
        if (product != null) {
            product.setCode(productDetails.getCode());
            product.setProductName(productDetails.getProductName());
            if (product instanceof DigitalProduct) {
                ((DigitalProduct) product).setDownloadLink(((DigitalProduct) productDetails).getDownloadLink());
            } else if (product instanceof PhysicalProduct) {
                ((PhysicalProduct) product).setDeliveryCost(((PhysicalProduct) productDetails).getDeliveryCost());

            }
            return productDao.save(product);
        }
        return null;
    }
}
