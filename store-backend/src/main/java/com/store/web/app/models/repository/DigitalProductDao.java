package com.store.web.app.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.store.web.app.models.entity.DigitalProduct;

public interface DigitalProductDao extends JpaRepository<DigitalProduct, Long> {

}
