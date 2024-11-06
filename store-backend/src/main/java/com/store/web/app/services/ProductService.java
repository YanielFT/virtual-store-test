package com.store.web.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.web.app.models.entity.DigitalProduct;
import com.store.web.app.models.entity.PhysicalProduct;
import com.store.web.app.models.entity.Product;
import com.store.web.app.models.repository.DigitalProductDao;
import com.store.web.app.models.repository.PhysicalProductDao;
import com.store.web.app.models.repository.ProductDao;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductService implements IProductService {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private PhysicalProductDao physicalProductDao;

    @Autowired
    private DigitalProductDao digitalProductDao;

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
        Product product = productDao.findById(id).orElse(null);
        if (product instanceof DigitalProduct) {
            product.setType("digital");
        } else if (product instanceof PhysicalProduct) {
            product.setType("physical");
        }
        return product;
    }

    @Override
    public List<Product> createDigitalProduct(DigitalProduct product) {

        digitalProductDao.save(product);

        return getAllProducts();
    }

    @Override
    public List<Product> createPhysicalProduct(PhysicalProduct product) {

        physicalProductDao.save(product);

        return getAllProducts();
    }

    @Override
    public List<Product> deleteProduct(Long id) {
        productDao.deleteById(id);
        return productDao.findAll();
    }

    @Override
    public Product updateDigitalProduct(Long id, DigitalProduct productDetails) {
        Product product = getProductById(id);
        if (product instanceof DigitalProduct) {
            product.setCode(productDetails.getCode());
            product.setProductName(productDetails.getProductName());
            ((DigitalProduct) product).setDownloadLink(productDetails.getDownloadLink());
            return productDao.save(product);
        } else if (product instanceof PhysicalProduct) {
            deleteProduct(id);
            DigitalProduct digitalProduct = new DigitalProduct();
            digitalProduct.setCode(productDetails.getCode());
            digitalProduct.setProductName(productDetails.getProductName());
            digitalProduct.setDownloadLink(productDetails.getDownloadLink());
            return productDao.save(digitalProduct);
        }
        return null;
    }

    @Override
    public Product updatePhysicalProduct(Long id, PhysicalProduct productDetails) {
        Product product = getProductById(id);
        if (product instanceof PhysicalProduct) {
            product.setCode(productDetails.getCode());
            product.setProductName(productDetails.getProductName());
            ((PhysicalProduct) product).setDeliveryCost(productDetails.getDeliveryCost());
            return productDao.save(product);
        } else if (product instanceof DigitalProduct) {
            deleteProduct(id);
            PhysicalProduct digitalProduct = new PhysicalProduct();
            digitalProduct.setCode(productDetails.getCode());
            digitalProduct.setProductName(productDetails.getProductName());
            digitalProduct.setDeliveryCost(productDetails.getDeliveryCost());
            return productDao.save(digitalProduct);
        }
        return null;
    }

    @Override
    public List<Product> findByCodeOrName(String search) {
        Set<Product> product = productDao.findByProductName(search).stream().collect(Collectors.toSet());
        product.addAll(productDao.findByCode(search));
        return product.stream().toList();
    }

}
