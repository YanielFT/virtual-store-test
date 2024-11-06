package com.store.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.store.web.app.helper.ProductMap;
import com.store.web.app.models.entity.DigitalProduct;
import com.store.web.app.models.entity.PhysicalProduct;
import com.store.web.app.models.entity.Product;
import com.store.web.app.response.ApiResponse;
import com.store.web.app.services.IProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("api/v1/products")
@CrossOrigin
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/")
    public ResponseEntity<ApiResponse<List<Product>>> findAllProduct() {
        List<Product> products = productService.getAllProducts();
        ApiResponse<List<Product>> response = ApiResponse.<List<Product>>builder()
                .data(products)
                .error(false)
                .status(HttpStatus.OK).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Product>> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);

        ApiResponse<Product> response = ApiResponse.<Product>builder()
                .data(product)
                .error(false)
                .status(HttpStatus.OK).build();

        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @GetMapping("/search/{search}")
    public ResponseEntity<ApiResponse<List<Product>>> getProductById(@PathVariable String search) {

        List<Product> product = productService.findByCodeOrName(search);

        ApiResponse<List<Product>> response = ApiResponse.<List<Product>>builder()
                .data(product)
                .error(false)
                .status(HttpStatus.OK).build();

        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @PostMapping("/")
    public ResponseEntity<List<Product>> createProduct(@RequestBody ProductMap product) {

        try {
            List<Product> createdProduct = null;
            if ("digital".equals(product.getType())) {
                DigitalProduct digitalProduct = new DigitalProduct();
                digitalProduct.setCode(product.getCode());
                digitalProduct.setProductName(product.getProductName());
                digitalProduct.setDownloadLink(product.getDownloadLink());
                createdProduct = productService.createDigitalProduct(digitalProduct);
            } else if ("physical".equals(product.getType())) {
                PhysicalProduct physicalProduct = new PhysicalProduct();
                physicalProduct.setCode(product.getCode());
                physicalProduct.setProductName(product.getProductName());
                physicalProduct.setDeliveryCost(product.getDeliveryCost());
                createdProduct = productService.createPhysicalProduct(physicalProduct);
            }
            return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/")
    public ResponseEntity<?> updateProduct(@RequestBody ProductMap product) {
        System.out.println(product);
        try {
            List<Product> result = null;
            if ("digital".equals(product.getType())) {
                DigitalProduct digitalProduct = new DigitalProduct();
                digitalProduct.setCode(product.getCode());
                digitalProduct.setProductName(product.getProductName());
                digitalProduct.setDownloadLink(product.getDownloadLink());
                if (productService.updateDigitalProduct(product.getId(), digitalProduct) != null) {
                    result = productService.getAllProducts();
                    return new ResponseEntity<>(result, HttpStatus.OK);
                } else {
                    ApiResponse<List<Product>> response = ApiResponse.<List<Product>>builder()
                            .data(null)
                            .error(true)
                            .message("Not found")
                            .status(HttpStatus.NOT_FOUND).build();
                    return new ResponseEntity<>(response, HttpStatus.OK);
                }
            } else if ("physical".equals(product.getType())) {
                PhysicalProduct physicalProduct = new PhysicalProduct();
                physicalProduct.setCode(product.getCode());
                physicalProduct.setProductName(product.getProductName());
                physicalProduct.setDeliveryCost(product.getDeliveryCost());
                if (productService.updatePhysicalProduct(product.getId(), physicalProduct) != null) {
                    result = productService.getAllProducts();
                    return new ResponseEntity<>(result, HttpStatus.OK);
                } else {
                    ApiResponse<List<Product>> response = ApiResponse.<List<Product>>builder()
                            .data(null)
                            .error(true)
                            .message("Not found")
                            .status(HttpStatus.OK).build();
                    return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
                }
            }
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<List<Product>>> deleteProduct(@PathVariable Long id) {
        try {
            List<Product> products = productService.deleteProduct(id);
            ApiResponse<List<Product>> response = ApiResponse.<List<Product>>builder()
                    .data(products)
                    .error(false)
                    .status(HttpStatus.OK).build();
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }
}
