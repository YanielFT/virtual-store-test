package com.store.web.app.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.store.web.app.models.entity.Product;

public interface ProductDao extends JpaRepository<Product, Long> {}
