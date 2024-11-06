package com.store.web.app.models.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.store.web.app.models.entity.Product;

public interface ProductDao extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE LOWER(p.code) LIKE CONCAT('%', LOWER(:code), '%')")
    List<Product> findByCode(@Param("code") String code);
    
    @Query("SELECT p FROM Product p WHERE LOWER(p.productName) LIKE CONCAT('%', LOWER(:productName), '%')")
    List<Product> findByProductName(@Param("productName") String productName);
}
